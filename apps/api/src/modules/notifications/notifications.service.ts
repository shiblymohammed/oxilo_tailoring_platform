import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private config: ConfigService) {}

  private get apiToken() { return this.config.get('WHATSAPP_API_TOKEN'); }
  private get phoneNumberId() { return this.config.get('WHATSAPP_PHONE_NUMBER_ID'); }

  async sendOrderReceived(phone: string, customerName: string, orderNumber: string, deliveryDate: Date) {
    return this.sendTemplate(phone, 'order_received', [
      { type: 'text', text: customerName },
      { type: 'text', text: orderNumber },
      { type: 'text', text: deliveryDate.toLocaleDateString('en-IN') },
    ]);
  }

  async sendOrderReady(phone: string, customerName: string, orderNumber: string) {
    return this.sendTemplate(phone, 'order_ready', [
      { type: 'text', text: customerName },
      { type: 'text', text: orderNumber },
    ]);
  }

  async sendPaymentReminder(phone: string, customerName: string, balance: number, orderNumber: string) {
    return this.sendTemplate(phone, 'payment_reminder', [
      { type: 'text', text: customerName },
      { type: 'text', text: orderNumber },
      { type: 'text', text: `₹${balance}` },
    ]);
  }

  async sendReviewRequest(phone: string, customerName: string, reviewLink: string) {
    return this.sendTemplate(phone, 'review_request', [
      { type: 'text', text: customerName },
      { type: 'text', text: reviewLink },
    ]);
  }

  private async sendTemplate(to: string, templateName: string, params: any[]) {
    if (!this.apiToken || !this.phoneNumberId) {
      this.logger.warn('WhatsApp not configured — skipping notification');
      return;
    }

    const cleanPhone = to.replace(/\D/g, '');

    try {
      await axios.post(
        `https://graph.facebook.com/v19.0/${this.phoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: cleanPhone,
          type: 'template',
          template: {
            name: templateName,
            language: { code: 'en' },
            components: [{ type: 'body', parameters: params }],
          },
        },
        { headers: { Authorization: `Bearer ${this.apiToken}` } },
      );
      this.logger.log(`WhatsApp ${templateName} sent to ${cleanPhone}`);
    } catch (err: any) {
      this.logger.error(`WhatsApp send failed: ${err.message}`);
    }
  }
}
