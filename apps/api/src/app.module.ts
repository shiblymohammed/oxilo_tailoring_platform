import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bull';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { CustomersModule } from './modules/customers/customers.module';
import { MeasurementsModule } from './modules/measurements/measurements.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { GarmentTypesModule } from './modules/garment-types/garment-types.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { PrintModule } from './modules/print/print.module';
import { ExpensesModule } from './modules/expenses/expenses.module';

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),

    // Rate limiting
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),

    // Queue (optional – requires Redis)
    ...(process.env.REDIS_URL && process.env.REDIS_URL !== 'redis://localhost:6379'
      ? [BullModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (config: ConfigService) => ({
            redis: config.get('REDIS_URL', 'redis://localhost:6379'),
          }),
          inject: [ConfigService],
        })]
      : []
    ),

    // Core
    DatabaseModule,

    // Feature modules
    AuthModule,
    CustomersModule,
    MeasurementsModule,
    OrdersModule,
    PaymentsModule,
    GarmentTypesModule,
    PricingModule,
    UploadsModule,
    NotificationsModule,
    AnalyticsModule,
    PrintModule,
    ExpensesModule,
  ],
})
export class AppModule {}
