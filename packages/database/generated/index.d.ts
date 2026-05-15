
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model MeasurementProfile
 * 
 */
export type MeasurementProfile = $Result.DefaultSelection<Prisma.$MeasurementProfilePayload>
/**
 * Model MeasurementVersion
 * 
 */
export type MeasurementVersion = $Result.DefaultSelection<Prisma.$MeasurementVersionPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderPhoto
 * 
 */
export type OrderPhoto = $Result.DefaultSelection<Prisma.$OrderPhotoPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model StatusLog
 * 
 */
export type StatusLog = $Result.DefaultSelection<Prisma.$StatusLogPayload>
/**
 * Model GarmentType
 * 
 */
export type GarmentType = $Result.DefaultSelection<Prisma.$GarmentTypePayload>
/**
 * Model PricingRule
 * 
 */
export type PricingRule = $Result.DefaultSelection<Prisma.$PricingRulePayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  RECEPTION: 'RECEPTION',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const CustomerTier: {
  REGULAR: 'REGULAR',
  FREQUENT: 'FREQUENT',
  VIP: 'VIP',
  INACTIVE: 'INACTIVE'
};

export type CustomerTier = (typeof CustomerTier)[keyof typeof CustomerTier]


export const MeasurementCategory: {
  SHIRT: 'SHIRT',
  PANT: 'PANT',
  BLAZER: 'BLAZER',
  SHERWANI: 'SHERWANI',
  SUIT: 'SUIT',
  BLOUSE: 'BLOUSE',
  CHURIDAR: 'CHURIDAR',
  FROCK: 'FROCK',
  GOWN: 'GOWN',
  UNIFORM: 'UNIFORM',
  WEDDING: 'WEDDING',
  OTHER: 'OTHER'
};

export type MeasurementCategory = (typeof MeasurementCategory)[keyof typeof MeasurementCategory]


export const OrderStatus: {
  RECEIVED: 'RECEIVED',
  MEASUREMENT_TAKEN: 'MEASUREMENT_TAKEN',
  CUTTING: 'CUTTING',
  STITCHING: 'STITCHING',
  TRIAL: 'TRIAL',
  ALTERATION: 'ALTERATION',
  READY: 'READY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Priority: {
  NORMAL: 'NORMAL',
  URGENT: 'URGENT',
  WEDDING: 'WEDDING',
  FESTIVAL: 'FESTIVAL',
  VIP: 'VIP'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const PaymentMethod: {
  CASH: 'CASH',
  UPI: 'UPI',
  CARD: 'CARD',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const ExpenseCategory: {
  THREAD: 'THREAD',
  ELECTRICITY: 'ELECTRICITY',
  SALARY: 'SALARY',
  FABRIC: 'FABRIC',
  RENT: 'RENT',
  EQUIPMENT: 'EQUIPMENT',
  OTHER: 'OTHER'
};

export type ExpenseCategory = (typeof ExpenseCategory)[keyof typeof ExpenseCategory]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type CustomerTier = $Enums.CustomerTier

export const CustomerTier: typeof $Enums.CustomerTier

export type MeasurementCategory = $Enums.MeasurementCategory

export const MeasurementCategory: typeof $Enums.MeasurementCategory

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type ExpenseCategory = $Enums.ExpenseCategory

export const ExpenseCategory: typeof $Enums.ExpenseCategory

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shops
 * const shops = await prisma.shop.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Shops
   * const shops = await prisma.shop.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.measurementProfile`: Exposes CRUD operations for the **MeasurementProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeasurementProfiles
    * const measurementProfiles = await prisma.measurementProfile.findMany()
    * ```
    */
  get measurementProfile(): Prisma.MeasurementProfileDelegate<ExtArgs>;

  /**
   * `prisma.measurementVersion`: Exposes CRUD operations for the **MeasurementVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeasurementVersions
    * const measurementVersions = await prisma.measurementVersion.findMany()
    * ```
    */
  get measurementVersion(): Prisma.MeasurementVersionDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.orderPhoto`: Exposes CRUD operations for the **OrderPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderPhotos
    * const orderPhotos = await prisma.orderPhoto.findMany()
    * ```
    */
  get orderPhoto(): Prisma.OrderPhotoDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.statusLog`: Exposes CRUD operations for the **StatusLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusLogs
    * const statusLogs = await prisma.statusLog.findMany()
    * ```
    */
  get statusLog(): Prisma.StatusLogDelegate<ExtArgs>;

  /**
   * `prisma.garmentType`: Exposes CRUD operations for the **GarmentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GarmentTypes
    * const garmentTypes = await prisma.garmentType.findMany()
    * ```
    */
  get garmentType(): Prisma.GarmentTypeDelegate<ExtArgs>;

  /**
   * `prisma.pricingRule`: Exposes CRUD operations for the **PricingRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingRules
    * const pricingRules = await prisma.pricingRule.findMany()
    * ```
    */
  get pricingRule(): Prisma.PricingRuleDelegate<ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Shop: 'Shop',
    User: 'User',
    Customer: 'Customer',
    MeasurementProfile: 'MeasurementProfile',
    MeasurementVersion: 'MeasurementVersion',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderPhoto: 'OrderPhoto',
    Payment: 'Payment',
    StatusLog: 'StatusLog',
    GarmentType: 'GarmentType',
    PricingRule: 'PricingRule',
    Expense: 'Expense'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "shop" | "user" | "customer" | "measurementProfile" | "measurementVersion" | "order" | "orderItem" | "orderPhoto" | "payment" | "statusLog" | "garmentType" | "pricingRule" | "expense"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      MeasurementProfile: {
        payload: Prisma.$MeasurementProfilePayload<ExtArgs>
        fields: Prisma.MeasurementProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>
          }
          findFirst: {
            args: Prisma.MeasurementProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>
          }
          findMany: {
            args: Prisma.MeasurementProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>[]
          }
          create: {
            args: Prisma.MeasurementProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>
          }
          createMany: {
            args: Prisma.MeasurementProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasurementProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>[]
          }
          delete: {
            args: Prisma.MeasurementProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>
          }
          update: {
            args: Prisma.MeasurementProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>
          }
          deleteMany: {
            args: Prisma.MeasurementProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeasurementProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementProfilePayload>
          }
          aggregate: {
            args: Prisma.MeasurementProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurementProfile>
          }
          groupBy: {
            args: Prisma.MeasurementProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementProfileCountAggregateOutputType> | number
          }
        }
      }
      MeasurementVersion: {
        payload: Prisma.$MeasurementVersionPayload<ExtArgs>
        fields: Prisma.MeasurementVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>
          }
          findFirst: {
            args: Prisma.MeasurementVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>
          }
          findMany: {
            args: Prisma.MeasurementVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>[]
          }
          create: {
            args: Prisma.MeasurementVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>
          }
          createMany: {
            args: Prisma.MeasurementVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasurementVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>[]
          }
          delete: {
            args: Prisma.MeasurementVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>
          }
          update: {
            args: Prisma.MeasurementVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>
          }
          deleteMany: {
            args: Prisma.MeasurementVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeasurementVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementVersionPayload>
          }
          aggregate: {
            args: Prisma.MeasurementVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurementVersion>
          }
          groupBy: {
            args: Prisma.MeasurementVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementVersionCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementVersionCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderPhoto: {
        payload: Prisma.$OrderPhotoPayload<ExtArgs>
        fields: Prisma.OrderPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>
          }
          findFirst: {
            args: Prisma.OrderPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>
          }
          findMany: {
            args: Prisma.OrderPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>[]
          }
          create: {
            args: Prisma.OrderPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>
          }
          createMany: {
            args: Prisma.OrderPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>[]
          }
          delete: {
            args: Prisma.OrderPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>
          }
          update: {
            args: Prisma.OrderPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>
          }
          deleteMany: {
            args: Prisma.OrderPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPhotoPayload>
          }
          aggregate: {
            args: Prisma.OrderPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderPhoto>
          }
          groupBy: {
            args: Prisma.OrderPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<OrderPhotoCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      StatusLog: {
        payload: Prisma.$StatusLogPayload<ExtArgs>
        fields: Prisma.StatusLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          findFirst: {
            args: Prisma.StatusLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          findMany: {
            args: Prisma.StatusLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>[]
          }
          create: {
            args: Prisma.StatusLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          createMany: {
            args: Prisma.StatusLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>[]
          }
          delete: {
            args: Prisma.StatusLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          update: {
            args: Prisma.StatusLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          deleteMany: {
            args: Prisma.StatusLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          aggregate: {
            args: Prisma.StatusLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusLog>
          }
          groupBy: {
            args: Prisma.StatusLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusLogCountArgs<ExtArgs>
            result: $Utils.Optional<StatusLogCountAggregateOutputType> | number
          }
        }
      }
      GarmentType: {
        payload: Prisma.$GarmentTypePayload<ExtArgs>
        fields: Prisma.GarmentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GarmentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GarmentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>
          }
          findFirst: {
            args: Prisma.GarmentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GarmentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>
          }
          findMany: {
            args: Prisma.GarmentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>[]
          }
          create: {
            args: Prisma.GarmentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>
          }
          createMany: {
            args: Prisma.GarmentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GarmentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>[]
          }
          delete: {
            args: Prisma.GarmentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>
          }
          update: {
            args: Prisma.GarmentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>
          }
          deleteMany: {
            args: Prisma.GarmentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GarmentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GarmentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarmentTypePayload>
          }
          aggregate: {
            args: Prisma.GarmentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGarmentType>
          }
          groupBy: {
            args: Prisma.GarmentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GarmentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GarmentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<GarmentTypeCountAggregateOutputType> | number
          }
        }
      }
      PricingRule: {
        payload: Prisma.$PricingRulePayload<ExtArgs>
        fields: Prisma.PricingRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findFirst: {
            args: Prisma.PricingRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findMany: {
            args: Prisma.PricingRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          create: {
            args: Prisma.PricingRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          createMany: {
            args: Prisma.PricingRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          delete: {
            args: Prisma.PricingRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          update: {
            args: Prisma.PricingRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          deleteMany: {
            args: Prisma.PricingRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PricingRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          aggregate: {
            args: Prisma.PricingRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingRule>
          }
          groupBy: {
            args: Prisma.PricingRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingRuleCountArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    users: number
    customers: number
    orders: number
    garmentTypes: number
    pricingRules: number
    expenses: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ShopCountOutputTypeCountUsersArgs
    customers?: boolean | ShopCountOutputTypeCountCustomersArgs
    orders?: boolean | ShopCountOutputTypeCountOrdersArgs
    garmentTypes?: boolean | ShopCountOutputTypeCountGarmentTypesArgs
    pricingRules?: boolean | ShopCountOutputTypeCountPricingRulesArgs
    expenses?: boolean | ShopCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountGarmentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GarmentTypeWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountPricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedOrders: number
    statusLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedOrders?: boolean | UserCountOutputTypeCountAssignedOrdersArgs
    statusLogs?: boolean | UserCountOutputTypeCountStatusLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatusLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusLogWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    measurements: number
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurements?: boolean | CustomerCountOutputTypeCountMeasurementsArgs
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementProfileWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type MeasurementProfileCountOutputType
   */

  export type MeasurementProfileCountOutputType = {
    versions: number
    orderItems: number
  }

  export type MeasurementProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | MeasurementProfileCountOutputTypeCountVersionsArgs
    orderItems?: boolean | MeasurementProfileCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MeasurementProfileCountOutputType without action
   */
  export type MeasurementProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfileCountOutputType
     */
    select?: MeasurementProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeasurementProfileCountOutputType without action
   */
  export type MeasurementProfileCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementVersionWhereInput
  }

  /**
   * MeasurementProfileCountOutputType without action
   */
  export type MeasurementProfileCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
    payments: number
    statusLogs: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
    payments?: boolean | OrderCountOutputTypeCountPaymentsArgs
    statusLogs?: boolean | OrderCountOutputTypeCountStatusLogsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountStatusLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusLogWhereInput
  }


  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    photos: number
  }

  export type OrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | OrderItemCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPhotoWhereInput
  }


  /**
   * Count Type GarmentTypeCountOutputType
   */

  export type GarmentTypeCountOutputType = {
    items: number
    pricingRules: number
  }

  export type GarmentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | GarmentTypeCountOutputTypeCountItemsArgs
    pricingRules?: boolean | GarmentTypeCountOutputTypeCountPricingRulesArgs
  }

  // Custom InputTypes
  /**
   * GarmentTypeCountOutputType without action
   */
  export type GarmentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentTypeCountOutputType
     */
    select?: GarmentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GarmentTypeCountOutputType without action
   */
  export type GarmentTypeCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * GarmentTypeCountOutputType without action
   */
  export type GarmentTypeCountOutputTypeCountPricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    logoUrl: string | null
    timezone: string | null
    currency: string | null
    upiId: string | null
    googleReviewLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    logoUrl: string | null
    timezone: string | null
    currency: string | null
    upiId: string | null
    googleReviewLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    logoUrl: number
    timezone: number
    currency: number
    upiId: number
    googleReviewLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    logoUrl?: true
    timezone?: true
    currency?: true
    upiId?: true
    googleReviewLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    logoUrl?: true
    timezone?: true
    currency?: true
    upiId?: true
    googleReviewLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    logoUrl?: true
    timezone?: true
    currency?: true
    upiId?: true
    googleReviewLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    name: string
    phone: string
    address: string | null
    logoUrl: string | null
    timezone: string
    currency: string
    upiId: string | null
    googleReviewLink: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    logoUrl?: boolean
    timezone?: boolean
    currency?: boolean
    upiId?: boolean
    googleReviewLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Shop$usersArgs<ExtArgs>
    customers?: boolean | Shop$customersArgs<ExtArgs>
    orders?: boolean | Shop$ordersArgs<ExtArgs>
    garmentTypes?: boolean | Shop$garmentTypesArgs<ExtArgs>
    pricingRules?: boolean | Shop$pricingRulesArgs<ExtArgs>
    expenses?: boolean | Shop$expensesArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    logoUrl?: boolean
    timezone?: boolean
    currency?: boolean
    upiId?: boolean
    googleReviewLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    logoUrl?: boolean
    timezone?: boolean
    currency?: boolean
    upiId?: boolean
    googleReviewLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Shop$usersArgs<ExtArgs>
    customers?: boolean | Shop$customersArgs<ExtArgs>
    orders?: boolean | Shop$ordersArgs<ExtArgs>
    garmentTypes?: boolean | Shop$garmentTypesArgs<ExtArgs>
    pricingRules?: boolean | Shop$pricingRulesArgs<ExtArgs>
    expenses?: boolean | Shop$expensesArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      garmentTypes: Prisma.$GarmentTypePayload<ExtArgs>[]
      pricingRules: Prisma.$PricingRulePayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      address: string | null
      logoUrl: string | null
      timezone: string
      currency: string
      upiId: string | null
      googleReviewLink: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Shop$usersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    customers<T extends Shop$customersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Shop$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    garmentTypes<T extends Shop$garmentTypesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$garmentTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findMany"> | Null>
    pricingRules<T extends Shop$pricingRulesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$pricingRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany"> | Null>
    expenses<T extends Shop$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */ 
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly phone: FieldRef<"Shop", 'String'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly logoUrl: FieldRef<"Shop", 'String'>
    readonly timezone: FieldRef<"Shop", 'String'>
    readonly currency: FieldRef<"Shop", 'String'>
    readonly upiId: FieldRef<"Shop", 'String'>
    readonly googleReviewLink: FieldRef<"Shop", 'String'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
  }

  /**
   * Shop.users
   */
  export type Shop$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Shop.customers
   */
  export type Shop$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Shop.orders
   */
  export type Shop$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Shop.garmentTypes
   */
  export type Shop$garmentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    where?: GarmentTypeWhereInput
    orderBy?: GarmentTypeOrderByWithRelationInput | GarmentTypeOrderByWithRelationInput[]
    cursor?: GarmentTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GarmentTypeScalarFieldEnum | GarmentTypeScalarFieldEnum[]
  }

  /**
   * Shop.pricingRules
   */
  export type Shop$pricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    cursor?: PricingRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * Shop.expenses
   */
  export type Shop$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    email: number
    phone: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    shopId: string
    name: string
    email: string
    phone: string | null
    passwordHash: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    assignedOrders?: boolean | User$assignedOrdersArgs<ExtArgs>
    statusLogs?: boolean | User$statusLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    assignedOrders?: boolean | User$assignedOrdersArgs<ExtArgs>
    statusLogs?: boolean | User$statusLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      assignedOrders: Prisma.$OrderPayload<ExtArgs>[]
      statusLogs: Prisma.$StatusLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      name: string
      email: string
      phone: string | null
      passwordHash: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignedOrders<T extends User$assignedOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    statusLogs<T extends User$statusLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$statusLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly shopId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.assignedOrders
   */
  export type User$assignedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.statusLogs
   */
  export type User$statusLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    where?: StatusLogWhereInput
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    cursor?: StatusLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    totalOrders: number | null
  }

  export type CustomerSumAggregateOutputType = {
    totalOrders: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    address: string | null
    gender: $Enums.Gender | null
    birthday: Date | null
    anniversary: Date | null
    notes: string | null
    tier: $Enums.CustomerTier | null
    totalOrders: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    address: string | null
    gender: $Enums.Gender | null
    birthday: Date | null
    anniversary: Date | null
    notes: string | null
    tier: $Enums.CustomerTier | null
    totalOrders: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    phone: number
    whatsapp: number
    email: number
    address: number
    gender: number
    birthday: number
    anniversary: number
    notes: number
    tier: number
    totalOrders: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    totalOrders?: true
  }

  export type CustomerSumAggregateInputType = {
    totalOrders?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    phone?: true
    whatsapp?: true
    email?: true
    address?: true
    gender?: true
    birthday?: true
    anniversary?: true
    notes?: true
    tier?: true
    totalOrders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    phone?: true
    whatsapp?: true
    email?: true
    address?: true
    gender?: true
    birthday?: true
    anniversary?: true
    notes?: true
    tier?: true
    totalOrders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    phone?: true
    whatsapp?: true
    email?: true
    address?: true
    gender?: true
    birthday?: true
    anniversary?: true
    notes?: true
    tier?: true
    totalOrders?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    shopId: string
    name: string
    phone: string
    whatsapp: string | null
    email: string | null
    address: string | null
    gender: $Enums.Gender | null
    birthday: Date | null
    anniversary: Date | null
    notes: string | null
    tier: $Enums.CustomerTier
    totalOrders: number
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    address?: boolean
    gender?: boolean
    birthday?: boolean
    anniversary?: boolean
    notes?: boolean
    tier?: boolean
    totalOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    measurements?: boolean | Customer$measurementsArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    address?: boolean
    gender?: boolean
    birthday?: boolean
    anniversary?: boolean
    notes?: boolean
    tier?: boolean
    totalOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    address?: boolean
    gender?: boolean
    birthday?: boolean
    anniversary?: boolean
    notes?: boolean
    tier?: boolean
    totalOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    measurements?: boolean | Customer$measurementsArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      measurements: Prisma.$MeasurementProfilePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      name: string
      phone: string
      whatsapp: string | null
      email: string | null
      address: string | null
      gender: $Enums.Gender | null
      birthday: Date | null
      anniversary: Date | null
      notes: string | null
      tier: $Enums.CustomerTier
      totalOrders: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    measurements<T extends Customer$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly shopId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly whatsapp: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly gender: FieldRef<"Customer", 'Gender'>
    readonly birthday: FieldRef<"Customer", 'DateTime'>
    readonly anniversary: FieldRef<"Customer", 'DateTime'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly tier: FieldRef<"Customer", 'CustomerTier'>
    readonly totalOrders: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.measurements
   */
  export type Customer$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    where?: MeasurementProfileWhereInput
    orderBy?: MeasurementProfileOrderByWithRelationInput | MeasurementProfileOrderByWithRelationInput[]
    cursor?: MeasurementProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementProfileScalarFieldEnum | MeasurementProfileScalarFieldEnum[]
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model MeasurementProfile
   */

  export type AggregateMeasurementProfile = {
    _count: MeasurementProfileCountAggregateOutputType | null
    _min: MeasurementProfileMinAggregateOutputType | null
    _max: MeasurementProfileMaxAggregateOutputType | null
  }

  export type MeasurementProfileMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    label: string | null
    category: $Enums.MeasurementCategory | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeasurementProfileMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    label: string | null
    category: $Enums.MeasurementCategory | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeasurementProfileCountAggregateOutputType = {
    id: number
    customerId: number
    label: number
    category: number
    fields: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeasurementProfileMinAggregateInputType = {
    id?: true
    customerId?: true
    label?: true
    category?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeasurementProfileMaxAggregateInputType = {
    id?: true
    customerId?: true
    label?: true
    category?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeasurementProfileCountAggregateInputType = {
    id?: true
    customerId?: true
    label?: true
    category?: true
    fields?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeasurementProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeasurementProfile to aggregate.
     */
    where?: MeasurementProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementProfiles to fetch.
     */
    orderBy?: MeasurementProfileOrderByWithRelationInput | MeasurementProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeasurementProfiles
    **/
    _count?: true | MeasurementProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementProfileMaxAggregateInputType
  }

  export type GetMeasurementProfileAggregateType<T extends MeasurementProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurementProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurementProfile[P]>
      : GetScalarType<T[P], AggregateMeasurementProfile[P]>
  }




  export type MeasurementProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementProfileWhereInput
    orderBy?: MeasurementProfileOrderByWithAggregationInput | MeasurementProfileOrderByWithAggregationInput[]
    by: MeasurementProfileScalarFieldEnum[] | MeasurementProfileScalarFieldEnum
    having?: MeasurementProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementProfileCountAggregateInputType | true
    _min?: MeasurementProfileMinAggregateInputType
    _max?: MeasurementProfileMaxAggregateInputType
  }

  export type MeasurementProfileGroupByOutputType = {
    id: string
    customerId: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonValue
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: MeasurementProfileCountAggregateOutputType | null
    _min: MeasurementProfileMinAggregateOutputType | null
    _max: MeasurementProfileMaxAggregateOutputType | null
  }

  type GetMeasurementProfileGroupByPayload<T extends MeasurementProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementProfileGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    label?: boolean
    category?: boolean
    fields?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    versions?: boolean | MeasurementProfile$versionsArgs<ExtArgs>
    orderItems?: boolean | MeasurementProfile$orderItemsArgs<ExtArgs>
    _count?: boolean | MeasurementProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurementProfile"]>

  export type MeasurementProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    label?: boolean
    category?: boolean
    fields?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurementProfile"]>

  export type MeasurementProfileSelectScalar = {
    id?: boolean
    customerId?: boolean
    label?: boolean
    category?: boolean
    fields?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeasurementProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    versions?: boolean | MeasurementProfile$versionsArgs<ExtArgs>
    orderItems?: boolean | MeasurementProfile$orderItemsArgs<ExtArgs>
    _count?: boolean | MeasurementProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeasurementProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $MeasurementProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeasurementProfile"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      versions: Prisma.$MeasurementVersionPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      label: string
      category: $Enums.MeasurementCategory
      fields: Prisma.JsonValue
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["measurementProfile"]>
    composites: {}
  }

  type MeasurementProfileGetPayload<S extends boolean | null | undefined | MeasurementProfileDefaultArgs> = $Result.GetResult<Prisma.$MeasurementProfilePayload, S>

  type MeasurementProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeasurementProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeasurementProfileCountAggregateInputType | true
    }

  export interface MeasurementProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeasurementProfile'], meta: { name: 'MeasurementProfile' } }
    /**
     * Find zero or one MeasurementProfile that matches the filter.
     * @param {MeasurementProfileFindUniqueArgs} args - Arguments to find a MeasurementProfile
     * @example
     * // Get one MeasurementProfile
     * const measurementProfile = await prisma.measurementProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasurementProfileFindUniqueArgs>(args: SelectSubset<T, MeasurementProfileFindUniqueArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MeasurementProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeasurementProfileFindUniqueOrThrowArgs} args - Arguments to find a MeasurementProfile
     * @example
     * // Get one MeasurementProfile
     * const measurementProfile = await prisma.measurementProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasurementProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasurementProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MeasurementProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementProfileFindFirstArgs} args - Arguments to find a MeasurementProfile
     * @example
     * // Get one MeasurementProfile
     * const measurementProfile = await prisma.measurementProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasurementProfileFindFirstArgs>(args?: SelectSubset<T, MeasurementProfileFindFirstArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MeasurementProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementProfileFindFirstOrThrowArgs} args - Arguments to find a MeasurementProfile
     * @example
     * // Get one MeasurementProfile
     * const measurementProfile = await prisma.measurementProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasurementProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasurementProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MeasurementProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeasurementProfiles
     * const measurementProfiles = await prisma.measurementProfile.findMany()
     * 
     * // Get first 10 MeasurementProfiles
     * const measurementProfiles = await prisma.measurementProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementProfileWithIdOnly = await prisma.measurementProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasurementProfileFindManyArgs>(args?: SelectSubset<T, MeasurementProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MeasurementProfile.
     * @param {MeasurementProfileCreateArgs} args - Arguments to create a MeasurementProfile.
     * @example
     * // Create one MeasurementProfile
     * const MeasurementProfile = await prisma.measurementProfile.create({
     *   data: {
     *     // ... data to create a MeasurementProfile
     *   }
     * })
     * 
     */
    create<T extends MeasurementProfileCreateArgs>(args: SelectSubset<T, MeasurementProfileCreateArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MeasurementProfiles.
     * @param {MeasurementProfileCreateManyArgs} args - Arguments to create many MeasurementProfiles.
     * @example
     * // Create many MeasurementProfiles
     * const measurementProfile = await prisma.measurementProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasurementProfileCreateManyArgs>(args?: SelectSubset<T, MeasurementProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeasurementProfiles and returns the data saved in the database.
     * @param {MeasurementProfileCreateManyAndReturnArgs} args - Arguments to create many MeasurementProfiles.
     * @example
     * // Create many MeasurementProfiles
     * const measurementProfile = await prisma.measurementProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeasurementProfiles and only return the `id`
     * const measurementProfileWithIdOnly = await prisma.measurementProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasurementProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasurementProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MeasurementProfile.
     * @param {MeasurementProfileDeleteArgs} args - Arguments to delete one MeasurementProfile.
     * @example
     * // Delete one MeasurementProfile
     * const MeasurementProfile = await prisma.measurementProfile.delete({
     *   where: {
     *     // ... filter to delete one MeasurementProfile
     *   }
     * })
     * 
     */
    delete<T extends MeasurementProfileDeleteArgs>(args: SelectSubset<T, MeasurementProfileDeleteArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MeasurementProfile.
     * @param {MeasurementProfileUpdateArgs} args - Arguments to update one MeasurementProfile.
     * @example
     * // Update one MeasurementProfile
     * const measurementProfile = await prisma.measurementProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasurementProfileUpdateArgs>(args: SelectSubset<T, MeasurementProfileUpdateArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MeasurementProfiles.
     * @param {MeasurementProfileDeleteManyArgs} args - Arguments to filter MeasurementProfiles to delete.
     * @example
     * // Delete a few MeasurementProfiles
     * const { count } = await prisma.measurementProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasurementProfileDeleteManyArgs>(args?: SelectSubset<T, MeasurementProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeasurementProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeasurementProfiles
     * const measurementProfile = await prisma.measurementProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasurementProfileUpdateManyArgs>(args: SelectSubset<T, MeasurementProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MeasurementProfile.
     * @param {MeasurementProfileUpsertArgs} args - Arguments to update or create a MeasurementProfile.
     * @example
     * // Update or create a MeasurementProfile
     * const measurementProfile = await prisma.measurementProfile.upsert({
     *   create: {
     *     // ... data to create a MeasurementProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeasurementProfile we want to update
     *   }
     * })
     */
    upsert<T extends MeasurementProfileUpsertArgs>(args: SelectSubset<T, MeasurementProfileUpsertArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MeasurementProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementProfileCountArgs} args - Arguments to filter MeasurementProfiles to count.
     * @example
     * // Count the number of MeasurementProfiles
     * const count = await prisma.measurementProfile.count({
     *   where: {
     *     // ... the filter for the MeasurementProfiles we want to count
     *   }
     * })
    **/
    count<T extends MeasurementProfileCountArgs>(
      args?: Subset<T, MeasurementProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeasurementProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeasurementProfileAggregateArgs>(args: Subset<T, MeasurementProfileAggregateArgs>): Prisma.PrismaPromise<GetMeasurementProfileAggregateType<T>>

    /**
     * Group by MeasurementProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeasurementProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementProfileGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeasurementProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeasurementProfile model
   */
  readonly fields: MeasurementProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeasurementProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    versions<T extends MeasurementProfile$versionsArgs<ExtArgs> = {}>(args?: Subset<T, MeasurementProfile$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "findMany"> | Null>
    orderItems<T extends MeasurementProfile$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MeasurementProfile$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeasurementProfile model
   */ 
  interface MeasurementProfileFieldRefs {
    readonly id: FieldRef<"MeasurementProfile", 'String'>
    readonly customerId: FieldRef<"MeasurementProfile", 'String'>
    readonly label: FieldRef<"MeasurementProfile", 'String'>
    readonly category: FieldRef<"MeasurementProfile", 'MeasurementCategory'>
    readonly fields: FieldRef<"MeasurementProfile", 'Json'>
    readonly isDefault: FieldRef<"MeasurementProfile", 'Boolean'>
    readonly createdAt: FieldRef<"MeasurementProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"MeasurementProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeasurementProfile findUnique
   */
  export type MeasurementProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementProfile to fetch.
     */
    where: MeasurementProfileWhereUniqueInput
  }

  /**
   * MeasurementProfile findUniqueOrThrow
   */
  export type MeasurementProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementProfile to fetch.
     */
    where: MeasurementProfileWhereUniqueInput
  }

  /**
   * MeasurementProfile findFirst
   */
  export type MeasurementProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementProfile to fetch.
     */
    where?: MeasurementProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementProfiles to fetch.
     */
    orderBy?: MeasurementProfileOrderByWithRelationInput | MeasurementProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeasurementProfiles.
     */
    cursor?: MeasurementProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeasurementProfiles.
     */
    distinct?: MeasurementProfileScalarFieldEnum | MeasurementProfileScalarFieldEnum[]
  }

  /**
   * MeasurementProfile findFirstOrThrow
   */
  export type MeasurementProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementProfile to fetch.
     */
    where?: MeasurementProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementProfiles to fetch.
     */
    orderBy?: MeasurementProfileOrderByWithRelationInput | MeasurementProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeasurementProfiles.
     */
    cursor?: MeasurementProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeasurementProfiles.
     */
    distinct?: MeasurementProfileScalarFieldEnum | MeasurementProfileScalarFieldEnum[]
  }

  /**
   * MeasurementProfile findMany
   */
  export type MeasurementProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementProfiles to fetch.
     */
    where?: MeasurementProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementProfiles to fetch.
     */
    orderBy?: MeasurementProfileOrderByWithRelationInput | MeasurementProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeasurementProfiles.
     */
    cursor?: MeasurementProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementProfiles.
     */
    skip?: number
    distinct?: MeasurementProfileScalarFieldEnum | MeasurementProfileScalarFieldEnum[]
  }

  /**
   * MeasurementProfile create
   */
  export type MeasurementProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MeasurementProfile.
     */
    data: XOR<MeasurementProfileCreateInput, MeasurementProfileUncheckedCreateInput>
  }

  /**
   * MeasurementProfile createMany
   */
  export type MeasurementProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeasurementProfiles.
     */
    data: MeasurementProfileCreateManyInput | MeasurementProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeasurementProfile createManyAndReturn
   */
  export type MeasurementProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MeasurementProfiles.
     */
    data: MeasurementProfileCreateManyInput | MeasurementProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeasurementProfile update
   */
  export type MeasurementProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MeasurementProfile.
     */
    data: XOR<MeasurementProfileUpdateInput, MeasurementProfileUncheckedUpdateInput>
    /**
     * Choose, which MeasurementProfile to update.
     */
    where: MeasurementProfileWhereUniqueInput
  }

  /**
   * MeasurementProfile updateMany
   */
  export type MeasurementProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeasurementProfiles.
     */
    data: XOR<MeasurementProfileUpdateManyMutationInput, MeasurementProfileUncheckedUpdateManyInput>
    /**
     * Filter which MeasurementProfiles to update
     */
    where?: MeasurementProfileWhereInput
  }

  /**
   * MeasurementProfile upsert
   */
  export type MeasurementProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MeasurementProfile to update in case it exists.
     */
    where: MeasurementProfileWhereUniqueInput
    /**
     * In case the MeasurementProfile found by the `where` argument doesn't exist, create a new MeasurementProfile with this data.
     */
    create: XOR<MeasurementProfileCreateInput, MeasurementProfileUncheckedCreateInput>
    /**
     * In case the MeasurementProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementProfileUpdateInput, MeasurementProfileUncheckedUpdateInput>
  }

  /**
   * MeasurementProfile delete
   */
  export type MeasurementProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    /**
     * Filter which MeasurementProfile to delete.
     */
    where: MeasurementProfileWhereUniqueInput
  }

  /**
   * MeasurementProfile deleteMany
   */
  export type MeasurementProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeasurementProfiles to delete
     */
    where?: MeasurementProfileWhereInput
  }

  /**
   * MeasurementProfile.versions
   */
  export type MeasurementProfile$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    where?: MeasurementVersionWhereInput
    orderBy?: MeasurementVersionOrderByWithRelationInput | MeasurementVersionOrderByWithRelationInput[]
    cursor?: MeasurementVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementVersionScalarFieldEnum | MeasurementVersionScalarFieldEnum[]
  }

  /**
   * MeasurementProfile.orderItems
   */
  export type MeasurementProfile$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * MeasurementProfile without action
   */
  export type MeasurementProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
  }


  /**
   * Model MeasurementVersion
   */

  export type AggregateMeasurementVersion = {
    _count: MeasurementVersionCountAggregateOutputType | null
    _min: MeasurementVersionMinAggregateOutputType | null
    _max: MeasurementVersionMaxAggregateOutputType | null
  }

  export type MeasurementVersionMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    note: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type MeasurementVersionMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    note: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type MeasurementVersionCountAggregateOutputType = {
    id: number
    profileId: number
    fields: number
    note: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type MeasurementVersionMinAggregateInputType = {
    id?: true
    profileId?: true
    note?: true
    createdAt?: true
    createdBy?: true
  }

  export type MeasurementVersionMaxAggregateInputType = {
    id?: true
    profileId?: true
    note?: true
    createdAt?: true
    createdBy?: true
  }

  export type MeasurementVersionCountAggregateInputType = {
    id?: true
    profileId?: true
    fields?: true
    note?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type MeasurementVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeasurementVersion to aggregate.
     */
    where?: MeasurementVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementVersions to fetch.
     */
    orderBy?: MeasurementVersionOrderByWithRelationInput | MeasurementVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeasurementVersions
    **/
    _count?: true | MeasurementVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementVersionMaxAggregateInputType
  }

  export type GetMeasurementVersionAggregateType<T extends MeasurementVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurementVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurementVersion[P]>
      : GetScalarType<T[P], AggregateMeasurementVersion[P]>
  }




  export type MeasurementVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementVersionWhereInput
    orderBy?: MeasurementVersionOrderByWithAggregationInput | MeasurementVersionOrderByWithAggregationInput[]
    by: MeasurementVersionScalarFieldEnum[] | MeasurementVersionScalarFieldEnum
    having?: MeasurementVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementVersionCountAggregateInputType | true
    _min?: MeasurementVersionMinAggregateInputType
    _max?: MeasurementVersionMaxAggregateInputType
  }

  export type MeasurementVersionGroupByOutputType = {
    id: string
    profileId: string
    fields: JsonValue
    note: string | null
    createdAt: Date
    createdBy: string | null
    _count: MeasurementVersionCountAggregateOutputType | null
    _min: MeasurementVersionMinAggregateOutputType | null
    _max: MeasurementVersionMaxAggregateOutputType | null
  }

  type GetMeasurementVersionGroupByPayload<T extends MeasurementVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementVersionGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementVersionGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    fields?: boolean
    note?: boolean
    createdAt?: boolean
    createdBy?: boolean
    profile?: boolean | MeasurementProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurementVersion"]>

  export type MeasurementVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    fields?: boolean
    note?: boolean
    createdAt?: boolean
    createdBy?: boolean
    profile?: boolean | MeasurementProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurementVersion"]>

  export type MeasurementVersionSelectScalar = {
    id?: boolean
    profileId?: boolean
    fields?: boolean
    note?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type MeasurementVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | MeasurementProfileDefaultArgs<ExtArgs>
  }
  export type MeasurementVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | MeasurementProfileDefaultArgs<ExtArgs>
  }

  export type $MeasurementVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeasurementVersion"
    objects: {
      profile: Prisma.$MeasurementProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      fields: Prisma.JsonValue
      note: string | null
      createdAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["measurementVersion"]>
    composites: {}
  }

  type MeasurementVersionGetPayload<S extends boolean | null | undefined | MeasurementVersionDefaultArgs> = $Result.GetResult<Prisma.$MeasurementVersionPayload, S>

  type MeasurementVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeasurementVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeasurementVersionCountAggregateInputType | true
    }

  export interface MeasurementVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeasurementVersion'], meta: { name: 'MeasurementVersion' } }
    /**
     * Find zero or one MeasurementVersion that matches the filter.
     * @param {MeasurementVersionFindUniqueArgs} args - Arguments to find a MeasurementVersion
     * @example
     * // Get one MeasurementVersion
     * const measurementVersion = await prisma.measurementVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasurementVersionFindUniqueArgs>(args: SelectSubset<T, MeasurementVersionFindUniqueArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MeasurementVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeasurementVersionFindUniqueOrThrowArgs} args - Arguments to find a MeasurementVersion
     * @example
     * // Get one MeasurementVersion
     * const measurementVersion = await prisma.measurementVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasurementVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasurementVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MeasurementVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementVersionFindFirstArgs} args - Arguments to find a MeasurementVersion
     * @example
     * // Get one MeasurementVersion
     * const measurementVersion = await prisma.measurementVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasurementVersionFindFirstArgs>(args?: SelectSubset<T, MeasurementVersionFindFirstArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MeasurementVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementVersionFindFirstOrThrowArgs} args - Arguments to find a MeasurementVersion
     * @example
     * // Get one MeasurementVersion
     * const measurementVersion = await prisma.measurementVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasurementVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasurementVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MeasurementVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeasurementVersions
     * const measurementVersions = await prisma.measurementVersion.findMany()
     * 
     * // Get first 10 MeasurementVersions
     * const measurementVersions = await prisma.measurementVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementVersionWithIdOnly = await prisma.measurementVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasurementVersionFindManyArgs>(args?: SelectSubset<T, MeasurementVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MeasurementVersion.
     * @param {MeasurementVersionCreateArgs} args - Arguments to create a MeasurementVersion.
     * @example
     * // Create one MeasurementVersion
     * const MeasurementVersion = await prisma.measurementVersion.create({
     *   data: {
     *     // ... data to create a MeasurementVersion
     *   }
     * })
     * 
     */
    create<T extends MeasurementVersionCreateArgs>(args: SelectSubset<T, MeasurementVersionCreateArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MeasurementVersions.
     * @param {MeasurementVersionCreateManyArgs} args - Arguments to create many MeasurementVersions.
     * @example
     * // Create many MeasurementVersions
     * const measurementVersion = await prisma.measurementVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasurementVersionCreateManyArgs>(args?: SelectSubset<T, MeasurementVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeasurementVersions and returns the data saved in the database.
     * @param {MeasurementVersionCreateManyAndReturnArgs} args - Arguments to create many MeasurementVersions.
     * @example
     * // Create many MeasurementVersions
     * const measurementVersion = await prisma.measurementVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeasurementVersions and only return the `id`
     * const measurementVersionWithIdOnly = await prisma.measurementVersion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasurementVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasurementVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MeasurementVersion.
     * @param {MeasurementVersionDeleteArgs} args - Arguments to delete one MeasurementVersion.
     * @example
     * // Delete one MeasurementVersion
     * const MeasurementVersion = await prisma.measurementVersion.delete({
     *   where: {
     *     // ... filter to delete one MeasurementVersion
     *   }
     * })
     * 
     */
    delete<T extends MeasurementVersionDeleteArgs>(args: SelectSubset<T, MeasurementVersionDeleteArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MeasurementVersion.
     * @param {MeasurementVersionUpdateArgs} args - Arguments to update one MeasurementVersion.
     * @example
     * // Update one MeasurementVersion
     * const measurementVersion = await prisma.measurementVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasurementVersionUpdateArgs>(args: SelectSubset<T, MeasurementVersionUpdateArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MeasurementVersions.
     * @param {MeasurementVersionDeleteManyArgs} args - Arguments to filter MeasurementVersions to delete.
     * @example
     * // Delete a few MeasurementVersions
     * const { count } = await prisma.measurementVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasurementVersionDeleteManyArgs>(args?: SelectSubset<T, MeasurementVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeasurementVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeasurementVersions
     * const measurementVersion = await prisma.measurementVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasurementVersionUpdateManyArgs>(args: SelectSubset<T, MeasurementVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MeasurementVersion.
     * @param {MeasurementVersionUpsertArgs} args - Arguments to update or create a MeasurementVersion.
     * @example
     * // Update or create a MeasurementVersion
     * const measurementVersion = await prisma.measurementVersion.upsert({
     *   create: {
     *     // ... data to create a MeasurementVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeasurementVersion we want to update
     *   }
     * })
     */
    upsert<T extends MeasurementVersionUpsertArgs>(args: SelectSubset<T, MeasurementVersionUpsertArgs<ExtArgs>>): Prisma__MeasurementVersionClient<$Result.GetResult<Prisma.$MeasurementVersionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MeasurementVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementVersionCountArgs} args - Arguments to filter MeasurementVersions to count.
     * @example
     * // Count the number of MeasurementVersions
     * const count = await prisma.measurementVersion.count({
     *   where: {
     *     // ... the filter for the MeasurementVersions we want to count
     *   }
     * })
    **/
    count<T extends MeasurementVersionCountArgs>(
      args?: Subset<T, MeasurementVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeasurementVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeasurementVersionAggregateArgs>(args: Subset<T, MeasurementVersionAggregateArgs>): Prisma.PrismaPromise<GetMeasurementVersionAggregateType<T>>

    /**
     * Group by MeasurementVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeasurementVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementVersionGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeasurementVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeasurementVersion model
   */
  readonly fields: MeasurementVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeasurementVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends MeasurementProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeasurementProfileDefaultArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeasurementVersion model
   */ 
  interface MeasurementVersionFieldRefs {
    readonly id: FieldRef<"MeasurementVersion", 'String'>
    readonly profileId: FieldRef<"MeasurementVersion", 'String'>
    readonly fields: FieldRef<"MeasurementVersion", 'Json'>
    readonly note: FieldRef<"MeasurementVersion", 'String'>
    readonly createdAt: FieldRef<"MeasurementVersion", 'DateTime'>
    readonly createdBy: FieldRef<"MeasurementVersion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MeasurementVersion findUnique
   */
  export type MeasurementVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementVersion to fetch.
     */
    where: MeasurementVersionWhereUniqueInput
  }

  /**
   * MeasurementVersion findUniqueOrThrow
   */
  export type MeasurementVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementVersion to fetch.
     */
    where: MeasurementVersionWhereUniqueInput
  }

  /**
   * MeasurementVersion findFirst
   */
  export type MeasurementVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementVersion to fetch.
     */
    where?: MeasurementVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementVersions to fetch.
     */
    orderBy?: MeasurementVersionOrderByWithRelationInput | MeasurementVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeasurementVersions.
     */
    cursor?: MeasurementVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeasurementVersions.
     */
    distinct?: MeasurementVersionScalarFieldEnum | MeasurementVersionScalarFieldEnum[]
  }

  /**
   * MeasurementVersion findFirstOrThrow
   */
  export type MeasurementVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementVersion to fetch.
     */
    where?: MeasurementVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementVersions to fetch.
     */
    orderBy?: MeasurementVersionOrderByWithRelationInput | MeasurementVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeasurementVersions.
     */
    cursor?: MeasurementVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeasurementVersions.
     */
    distinct?: MeasurementVersionScalarFieldEnum | MeasurementVersionScalarFieldEnum[]
  }

  /**
   * MeasurementVersion findMany
   */
  export type MeasurementVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * Filter, which MeasurementVersions to fetch.
     */
    where?: MeasurementVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeasurementVersions to fetch.
     */
    orderBy?: MeasurementVersionOrderByWithRelationInput | MeasurementVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeasurementVersions.
     */
    cursor?: MeasurementVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeasurementVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeasurementVersions.
     */
    skip?: number
    distinct?: MeasurementVersionScalarFieldEnum | MeasurementVersionScalarFieldEnum[]
  }

  /**
   * MeasurementVersion create
   */
  export type MeasurementVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a MeasurementVersion.
     */
    data: XOR<MeasurementVersionCreateInput, MeasurementVersionUncheckedCreateInput>
  }

  /**
   * MeasurementVersion createMany
   */
  export type MeasurementVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeasurementVersions.
     */
    data: MeasurementVersionCreateManyInput | MeasurementVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeasurementVersion createManyAndReturn
   */
  export type MeasurementVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MeasurementVersions.
     */
    data: MeasurementVersionCreateManyInput | MeasurementVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeasurementVersion update
   */
  export type MeasurementVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a MeasurementVersion.
     */
    data: XOR<MeasurementVersionUpdateInput, MeasurementVersionUncheckedUpdateInput>
    /**
     * Choose, which MeasurementVersion to update.
     */
    where: MeasurementVersionWhereUniqueInput
  }

  /**
   * MeasurementVersion updateMany
   */
  export type MeasurementVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeasurementVersions.
     */
    data: XOR<MeasurementVersionUpdateManyMutationInput, MeasurementVersionUncheckedUpdateManyInput>
    /**
     * Filter which MeasurementVersions to update
     */
    where?: MeasurementVersionWhereInput
  }

  /**
   * MeasurementVersion upsert
   */
  export type MeasurementVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the MeasurementVersion to update in case it exists.
     */
    where: MeasurementVersionWhereUniqueInput
    /**
     * In case the MeasurementVersion found by the `where` argument doesn't exist, create a new MeasurementVersion with this data.
     */
    create: XOR<MeasurementVersionCreateInput, MeasurementVersionUncheckedCreateInput>
    /**
     * In case the MeasurementVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementVersionUpdateInput, MeasurementVersionUncheckedUpdateInput>
  }

  /**
   * MeasurementVersion delete
   */
  export type MeasurementVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
    /**
     * Filter which MeasurementVersion to delete.
     */
    where: MeasurementVersionWhereUniqueInput
  }

  /**
   * MeasurementVersion deleteMany
   */
  export type MeasurementVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeasurementVersions to delete
     */
    where?: MeasurementVersionWhereInput
  }

  /**
   * MeasurementVersion without action
   */
  export type MeasurementVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementVersion
     */
    select?: MeasurementVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementVersionInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
    advancePaid: Decimal | null
    balanceDue: Decimal | null
    discountAmount: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: Decimal | null
    advancePaid: Decimal | null
    balanceDue: Decimal | null
    discountAmount: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    customerId: string | null
    orderNumber: string | null
    status: $Enums.OrderStatus | null
    priority: $Enums.Priority | null
    deliveryDate: Date | null
    assignedToId: string | null
    totalAmount: Decimal | null
    advancePaid: Decimal | null
    balanceDue: Decimal | null
    discountAmount: Decimal | null
    discountNote: string | null
    notes: string | null
    isAlteration: boolean | null
    qrCode: string | null
    trialDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    customerId: string | null
    orderNumber: string | null
    status: $Enums.OrderStatus | null
    priority: $Enums.Priority | null
    deliveryDate: Date | null
    assignedToId: string | null
    totalAmount: Decimal | null
    advancePaid: Decimal | null
    balanceDue: Decimal | null
    discountAmount: Decimal | null
    discountNote: string | null
    notes: string | null
    isAlteration: boolean | null
    qrCode: string | null
    trialDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    shopId: number
    customerId: number
    orderNumber: number
    status: number
    priority: number
    deliveryDate: number
    assignedToId: number
    totalAmount: number
    advancePaid: number
    balanceDue: number
    discountAmount: number
    discountNote: number
    notes: number
    isAlteration: number
    qrCode: number
    trialDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
    advancePaid?: true
    balanceDue?: true
    discountAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
    advancePaid?: true
    balanceDue?: true
    discountAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    shopId?: true
    customerId?: true
    orderNumber?: true
    status?: true
    priority?: true
    deliveryDate?: true
    assignedToId?: true
    totalAmount?: true
    advancePaid?: true
    balanceDue?: true
    discountAmount?: true
    discountNote?: true
    notes?: true
    isAlteration?: true
    qrCode?: true
    trialDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    shopId?: true
    customerId?: true
    orderNumber?: true
    status?: true
    priority?: true
    deliveryDate?: true
    assignedToId?: true
    totalAmount?: true
    advancePaid?: true
    balanceDue?: true
    discountAmount?: true
    discountNote?: true
    notes?: true
    isAlteration?: true
    qrCode?: true
    trialDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    shopId?: true
    customerId?: true
    orderNumber?: true
    status?: true
    priority?: true
    deliveryDate?: true
    assignedToId?: true
    totalAmount?: true
    advancePaid?: true
    balanceDue?: true
    discountAmount?: true
    discountNote?: true
    notes?: true
    isAlteration?: true
    qrCode?: true
    trialDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    shopId: string
    customerId: string
    orderNumber: string
    status: $Enums.OrderStatus
    priority: $Enums.Priority
    deliveryDate: Date
    assignedToId: string | null
    totalAmount: Decimal
    advancePaid: Decimal
    balanceDue: Decimal
    discountAmount: Decimal
    discountNote: string | null
    notes: string | null
    isAlteration: boolean
    qrCode: string | null
    trialDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    customerId?: boolean
    orderNumber?: boolean
    status?: boolean
    priority?: boolean
    deliveryDate?: boolean
    assignedToId?: boolean
    totalAmount?: boolean
    advancePaid?: boolean
    balanceDue?: boolean
    discountAmount?: boolean
    discountNote?: boolean
    notes?: boolean
    isAlteration?: boolean
    qrCode?: boolean
    trialDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    assignedTo?: boolean | Order$assignedToArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    statusLogs?: boolean | Order$statusLogsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    customerId?: boolean
    orderNumber?: boolean
    status?: boolean
    priority?: boolean
    deliveryDate?: boolean
    assignedToId?: boolean
    totalAmount?: boolean
    advancePaid?: boolean
    balanceDue?: boolean
    discountAmount?: boolean
    discountNote?: boolean
    notes?: boolean
    isAlteration?: boolean
    qrCode?: boolean
    trialDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    assignedTo?: boolean | Order$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    shopId?: boolean
    customerId?: boolean
    orderNumber?: boolean
    status?: boolean
    priority?: boolean
    deliveryDate?: boolean
    assignedToId?: boolean
    totalAmount?: boolean
    advancePaid?: boolean
    balanceDue?: boolean
    discountAmount?: boolean
    discountNote?: boolean
    notes?: boolean
    isAlteration?: boolean
    qrCode?: boolean
    trialDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    assignedTo?: boolean | Order$assignedToArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    statusLogs?: boolean | Order$statusLogsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    assignedTo?: boolean | Order$assignedToArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$OrderItemPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      statusLogs: Prisma.$StatusLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      customerId: string
      orderNumber: string
      status: $Enums.OrderStatus
      priority: $Enums.Priority
      deliveryDate: Date
      assignedToId: string | null
      totalAmount: Prisma.Decimal
      advancePaid: Prisma.Decimal
      balanceDue: Prisma.Decimal
      discountAmount: Prisma.Decimal
      discountNote: string | null
      notes: string | null
      isAlteration: boolean
      qrCode: string | null
      trialDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignedTo<T extends Order$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Order$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Order$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    statusLogs<T extends Order$statusLogsArgs<ExtArgs> = {}>(args?: Subset<T, Order$statusLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly shopId: FieldRef<"Order", 'String'>
    readonly customerId: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly priority: FieldRef<"Order", 'Priority'>
    readonly deliveryDate: FieldRef<"Order", 'DateTime'>
    readonly assignedToId: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly advancePaid: FieldRef<"Order", 'Decimal'>
    readonly balanceDue: FieldRef<"Order", 'Decimal'>
    readonly discountAmount: FieldRef<"Order", 'Decimal'>
    readonly discountNote: FieldRef<"Order", 'String'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly isAlteration: FieldRef<"Order", 'Boolean'>
    readonly qrCode: FieldRef<"Order", 'String'>
    readonly trialDate: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.assignedTo
   */
  export type Order$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.payments
   */
  export type Order$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Order.statusLogs
   */
  export type Order$statusLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    where?: StatusLogWhereInput
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    cursor?: StatusLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    garmentTypeId: string | null
    measurementProfileId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    notes: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    garmentTypeId: string | null
    measurementProfileId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    notes: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    garmentTypeId: number
    measurementProfileId: number
    quantity: number
    unitPrice: number
    addOns: number
    notes: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    garmentTypeId?: true
    measurementProfileId?: true
    quantity?: true
    unitPrice?: true
    notes?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    garmentTypeId?: true
    measurementProfileId?: true
    quantity?: true
    unitPrice?: true
    notes?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    garmentTypeId?: true
    measurementProfileId?: true
    quantity?: true
    unitPrice?: true
    addOns?: true
    notes?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    garmentTypeId: string
    measurementProfileId: string | null
    quantity: number
    unitPrice: Decimal
    addOns: JsonValue
    notes: string | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    garmentTypeId?: boolean
    measurementProfileId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    addOns?: boolean
    notes?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    garmentType?: boolean | GarmentTypeDefaultArgs<ExtArgs>
    measurementProfile?: boolean | OrderItem$measurementProfileArgs<ExtArgs>
    photos?: boolean | OrderItem$photosArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    garmentTypeId?: boolean
    measurementProfileId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    addOns?: boolean
    notes?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    garmentType?: boolean | GarmentTypeDefaultArgs<ExtArgs>
    measurementProfile?: boolean | OrderItem$measurementProfileArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    garmentTypeId?: boolean
    measurementProfileId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    addOns?: boolean
    notes?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    garmentType?: boolean | GarmentTypeDefaultArgs<ExtArgs>
    measurementProfile?: boolean | OrderItem$measurementProfileArgs<ExtArgs>
    photos?: boolean | OrderItem$photosArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    garmentType?: boolean | GarmentTypeDefaultArgs<ExtArgs>
    measurementProfile?: boolean | OrderItem$measurementProfileArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      garmentType: Prisma.$GarmentTypePayload<ExtArgs>
      measurementProfile: Prisma.$MeasurementProfilePayload<ExtArgs> | null
      photos: Prisma.$OrderPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      garmentTypeId: string
      measurementProfileId: string | null
      quantity: number
      unitPrice: Prisma.Decimal
      addOns: Prisma.JsonValue
      notes: string | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    garmentType<T extends GarmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GarmentTypeDefaultArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    measurementProfile<T extends OrderItem$measurementProfileArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$measurementProfileArgs<ExtArgs>>): Prisma__MeasurementProfileClient<$Result.GetResult<Prisma.$MeasurementProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    photos<T extends OrderItem$photosArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly garmentTypeId: FieldRef<"OrderItem", 'String'>
    readonly measurementProfileId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly addOns: FieldRef<"OrderItem", 'Json'>
    readonly notes: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem.measurementProfile
   */
  export type OrderItem$measurementProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeasurementProfile
     */
    select?: MeasurementProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementProfileInclude<ExtArgs> | null
    where?: MeasurementProfileWhereInput
  }

  /**
   * OrderItem.photos
   */
  export type OrderItem$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    where?: OrderPhotoWhereInput
    orderBy?: OrderPhotoOrderByWithRelationInput | OrderPhotoOrderByWithRelationInput[]
    cursor?: OrderPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderPhotoScalarFieldEnum | OrderPhotoScalarFieldEnum[]
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model OrderPhoto
   */

  export type AggregateOrderPhoto = {
    _count: OrderPhotoCountAggregateOutputType | null
    _min: OrderPhotoMinAggregateOutputType | null
    _max: OrderPhotoMaxAggregateOutputType | null
  }

  export type OrderPhotoMinAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    url: string | null
    key: string | null
    caption: string | null
    uploadedAt: Date | null
  }

  export type OrderPhotoMaxAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    url: string | null
    key: string | null
    caption: string | null
    uploadedAt: Date | null
  }

  export type OrderPhotoCountAggregateOutputType = {
    id: number
    orderItemId: number
    url: number
    key: number
    caption: number
    uploadedAt: number
    _all: number
  }


  export type OrderPhotoMinAggregateInputType = {
    id?: true
    orderItemId?: true
    url?: true
    key?: true
    caption?: true
    uploadedAt?: true
  }

  export type OrderPhotoMaxAggregateInputType = {
    id?: true
    orderItemId?: true
    url?: true
    key?: true
    caption?: true
    uploadedAt?: true
  }

  export type OrderPhotoCountAggregateInputType = {
    id?: true
    orderItemId?: true
    url?: true
    key?: true
    caption?: true
    uploadedAt?: true
    _all?: true
  }

  export type OrderPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderPhoto to aggregate.
     */
    where?: OrderPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPhotos to fetch.
     */
    orderBy?: OrderPhotoOrderByWithRelationInput | OrderPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderPhotos
    **/
    _count?: true | OrderPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderPhotoMaxAggregateInputType
  }

  export type GetOrderPhotoAggregateType<T extends OrderPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderPhoto[P]>
      : GetScalarType<T[P], AggregateOrderPhoto[P]>
  }




  export type OrderPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPhotoWhereInput
    orderBy?: OrderPhotoOrderByWithAggregationInput | OrderPhotoOrderByWithAggregationInput[]
    by: OrderPhotoScalarFieldEnum[] | OrderPhotoScalarFieldEnum
    having?: OrderPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderPhotoCountAggregateInputType | true
    _min?: OrderPhotoMinAggregateInputType
    _max?: OrderPhotoMaxAggregateInputType
  }

  export type OrderPhotoGroupByOutputType = {
    id: string
    orderItemId: string
    url: string
    key: string
    caption: string | null
    uploadedAt: Date
    _count: OrderPhotoCountAggregateOutputType | null
    _min: OrderPhotoMinAggregateOutputType | null
    _max: OrderPhotoMaxAggregateOutputType | null
  }

  type GetOrderPhotoGroupByPayload<T extends OrderPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], OrderPhotoGroupByOutputType[P]>
        }
      >
    >


  export type OrderPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    url?: boolean
    key?: boolean
    caption?: boolean
    uploadedAt?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderPhoto"]>

  export type OrderPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    url?: boolean
    key?: boolean
    caption?: boolean
    uploadedAt?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderPhoto"]>

  export type OrderPhotoSelectScalar = {
    id?: boolean
    orderItemId?: boolean
    url?: boolean
    key?: boolean
    caption?: boolean
    uploadedAt?: boolean
  }

  export type OrderPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }
  export type OrderPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }

  export type $OrderPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderPhoto"
    objects: {
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderItemId: string
      url: string
      key: string
      caption: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["orderPhoto"]>
    composites: {}
  }

  type OrderPhotoGetPayload<S extends boolean | null | undefined | OrderPhotoDefaultArgs> = $Result.GetResult<Prisma.$OrderPhotoPayload, S>

  type OrderPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderPhotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderPhotoCountAggregateInputType | true
    }

  export interface OrderPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderPhoto'], meta: { name: 'OrderPhoto' } }
    /**
     * Find zero or one OrderPhoto that matches the filter.
     * @param {OrderPhotoFindUniqueArgs} args - Arguments to find a OrderPhoto
     * @example
     * // Get one OrderPhoto
     * const orderPhoto = await prisma.orderPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderPhotoFindUniqueArgs>(args: SelectSubset<T, OrderPhotoFindUniqueArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderPhoto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderPhotoFindUniqueOrThrowArgs} args - Arguments to find a OrderPhoto
     * @example
     * // Get one OrderPhoto
     * const orderPhoto = await prisma.orderPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPhotoFindFirstArgs} args - Arguments to find a OrderPhoto
     * @example
     * // Get one OrderPhoto
     * const orderPhoto = await prisma.orderPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderPhotoFindFirstArgs>(args?: SelectSubset<T, OrderPhotoFindFirstArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPhotoFindFirstOrThrowArgs} args - Arguments to find a OrderPhoto
     * @example
     * // Get one OrderPhoto
     * const orderPhoto = await prisma.orderPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderPhotos
     * const orderPhotos = await prisma.orderPhoto.findMany()
     * 
     * // Get first 10 OrderPhotos
     * const orderPhotos = await prisma.orderPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderPhotoWithIdOnly = await prisma.orderPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderPhotoFindManyArgs>(args?: SelectSubset<T, OrderPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderPhoto.
     * @param {OrderPhotoCreateArgs} args - Arguments to create a OrderPhoto.
     * @example
     * // Create one OrderPhoto
     * const OrderPhoto = await prisma.orderPhoto.create({
     *   data: {
     *     // ... data to create a OrderPhoto
     *   }
     * })
     * 
     */
    create<T extends OrderPhotoCreateArgs>(args: SelectSubset<T, OrderPhotoCreateArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderPhotos.
     * @param {OrderPhotoCreateManyArgs} args - Arguments to create many OrderPhotos.
     * @example
     * // Create many OrderPhotos
     * const orderPhoto = await prisma.orderPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderPhotoCreateManyArgs>(args?: SelectSubset<T, OrderPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderPhotos and returns the data saved in the database.
     * @param {OrderPhotoCreateManyAndReturnArgs} args - Arguments to create many OrderPhotos.
     * @example
     * // Create many OrderPhotos
     * const orderPhoto = await prisma.orderPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderPhotos and only return the `id`
     * const orderPhotoWithIdOnly = await prisma.orderPhoto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderPhoto.
     * @param {OrderPhotoDeleteArgs} args - Arguments to delete one OrderPhoto.
     * @example
     * // Delete one OrderPhoto
     * const OrderPhoto = await prisma.orderPhoto.delete({
     *   where: {
     *     // ... filter to delete one OrderPhoto
     *   }
     * })
     * 
     */
    delete<T extends OrderPhotoDeleteArgs>(args: SelectSubset<T, OrderPhotoDeleteArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderPhoto.
     * @param {OrderPhotoUpdateArgs} args - Arguments to update one OrderPhoto.
     * @example
     * // Update one OrderPhoto
     * const orderPhoto = await prisma.orderPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderPhotoUpdateArgs>(args: SelectSubset<T, OrderPhotoUpdateArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderPhotos.
     * @param {OrderPhotoDeleteManyArgs} args - Arguments to filter OrderPhotos to delete.
     * @example
     * // Delete a few OrderPhotos
     * const { count } = await prisma.orderPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderPhotoDeleteManyArgs>(args?: SelectSubset<T, OrderPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderPhotos
     * const orderPhoto = await prisma.orderPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderPhotoUpdateManyArgs>(args: SelectSubset<T, OrderPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderPhoto.
     * @param {OrderPhotoUpsertArgs} args - Arguments to update or create a OrderPhoto.
     * @example
     * // Update or create a OrderPhoto
     * const orderPhoto = await prisma.orderPhoto.upsert({
     *   create: {
     *     // ... data to create a OrderPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderPhoto we want to update
     *   }
     * })
     */
    upsert<T extends OrderPhotoUpsertArgs>(args: SelectSubset<T, OrderPhotoUpsertArgs<ExtArgs>>): Prisma__OrderPhotoClient<$Result.GetResult<Prisma.$OrderPhotoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPhotoCountArgs} args - Arguments to filter OrderPhotos to count.
     * @example
     * // Count the number of OrderPhotos
     * const count = await prisma.orderPhoto.count({
     *   where: {
     *     // ... the filter for the OrderPhotos we want to count
     *   }
     * })
    **/
    count<T extends OrderPhotoCountArgs>(
      args?: Subset<T, OrderPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderPhotoAggregateArgs>(args: Subset<T, OrderPhotoAggregateArgs>): Prisma.PrismaPromise<GetOrderPhotoAggregateType<T>>

    /**
     * Group by OrderPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderPhotoGroupByArgs['orderBy'] }
        : { orderBy?: OrderPhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderPhoto model
   */
  readonly fields: OrderPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderPhoto model
   */ 
  interface OrderPhotoFieldRefs {
    readonly id: FieldRef<"OrderPhoto", 'String'>
    readonly orderItemId: FieldRef<"OrderPhoto", 'String'>
    readonly url: FieldRef<"OrderPhoto", 'String'>
    readonly key: FieldRef<"OrderPhoto", 'String'>
    readonly caption: FieldRef<"OrderPhoto", 'String'>
    readonly uploadedAt: FieldRef<"OrderPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderPhoto findUnique
   */
  export type OrderPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * Filter, which OrderPhoto to fetch.
     */
    where: OrderPhotoWhereUniqueInput
  }

  /**
   * OrderPhoto findUniqueOrThrow
   */
  export type OrderPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * Filter, which OrderPhoto to fetch.
     */
    where: OrderPhotoWhereUniqueInput
  }

  /**
   * OrderPhoto findFirst
   */
  export type OrderPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * Filter, which OrderPhoto to fetch.
     */
    where?: OrderPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPhotos to fetch.
     */
    orderBy?: OrderPhotoOrderByWithRelationInput | OrderPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderPhotos.
     */
    cursor?: OrderPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderPhotos.
     */
    distinct?: OrderPhotoScalarFieldEnum | OrderPhotoScalarFieldEnum[]
  }

  /**
   * OrderPhoto findFirstOrThrow
   */
  export type OrderPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * Filter, which OrderPhoto to fetch.
     */
    where?: OrderPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPhotos to fetch.
     */
    orderBy?: OrderPhotoOrderByWithRelationInput | OrderPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderPhotos.
     */
    cursor?: OrderPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderPhotos.
     */
    distinct?: OrderPhotoScalarFieldEnum | OrderPhotoScalarFieldEnum[]
  }

  /**
   * OrderPhoto findMany
   */
  export type OrderPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * Filter, which OrderPhotos to fetch.
     */
    where?: OrderPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPhotos to fetch.
     */
    orderBy?: OrderPhotoOrderByWithRelationInput | OrderPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderPhotos.
     */
    cursor?: OrderPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPhotos.
     */
    skip?: number
    distinct?: OrderPhotoScalarFieldEnum | OrderPhotoScalarFieldEnum[]
  }

  /**
   * OrderPhoto create
   */
  export type OrderPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderPhoto.
     */
    data: XOR<OrderPhotoCreateInput, OrderPhotoUncheckedCreateInput>
  }

  /**
   * OrderPhoto createMany
   */
  export type OrderPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderPhotos.
     */
    data: OrderPhotoCreateManyInput | OrderPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderPhoto createManyAndReturn
   */
  export type OrderPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderPhotos.
     */
    data: OrderPhotoCreateManyInput | OrderPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderPhoto update
   */
  export type OrderPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderPhoto.
     */
    data: XOR<OrderPhotoUpdateInput, OrderPhotoUncheckedUpdateInput>
    /**
     * Choose, which OrderPhoto to update.
     */
    where: OrderPhotoWhereUniqueInput
  }

  /**
   * OrderPhoto updateMany
   */
  export type OrderPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderPhotos.
     */
    data: XOR<OrderPhotoUpdateManyMutationInput, OrderPhotoUncheckedUpdateManyInput>
    /**
     * Filter which OrderPhotos to update
     */
    where?: OrderPhotoWhereInput
  }

  /**
   * OrderPhoto upsert
   */
  export type OrderPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderPhoto to update in case it exists.
     */
    where: OrderPhotoWhereUniqueInput
    /**
     * In case the OrderPhoto found by the `where` argument doesn't exist, create a new OrderPhoto with this data.
     */
    create: XOR<OrderPhotoCreateInput, OrderPhotoUncheckedCreateInput>
    /**
     * In case the OrderPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderPhotoUpdateInput, OrderPhotoUncheckedUpdateInput>
  }

  /**
   * OrderPhoto delete
   */
  export type OrderPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
    /**
     * Filter which OrderPhoto to delete.
     */
    where: OrderPhotoWhereUniqueInput
  }

  /**
   * OrderPhoto deleteMany
   */
  export type OrderPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderPhotos to delete
     */
    where?: OrderPhotoWhereInput
  }

  /**
   * OrderPhoto without action
   */
  export type OrderPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPhoto
     */
    select?: OrderPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPhotoInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: Decimal | null
    method: $Enums.PaymentMethod | null
    paidAt: Date | null
    notes: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: Decimal | null
    method: $Enums.PaymentMethod | null
    paidAt: Date | null
    notes: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    amount: number
    method: number
    paidAt: number
    notes: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    paidAt?: true
    notes?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    paidAt?: true
    notes?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    paidAt?: true
    notes?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: string
    amount: Decimal
    method: $Enums.PaymentMethod
    paidAt: Date
    notes: string | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    paidAt?: boolean
    notes?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    paidAt?: boolean
    notes?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    paidAt?: boolean
    notes?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      amount: Prisma.Decimal
      method: $Enums.PaymentMethod
      paidAt: Date
      notes: string | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly notes: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model StatusLog
   */

  export type AggregateStatusLog = {
    _count: StatusLogCountAggregateOutputType | null
    _min: StatusLogMinAggregateOutputType | null
    _max: StatusLogMaxAggregateOutputType | null
  }

  export type StatusLogMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    note: string | null
    changedBy: string | null
    changedAt: Date | null
  }

  export type StatusLogMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    note: string | null
    changedBy: string | null
    changedAt: Date | null
  }

  export type StatusLogCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    note: number
    changedBy: number
    changedAt: number
    _all: number
  }


  export type StatusLogMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    changedBy?: true
    changedAt?: true
  }

  export type StatusLogMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    changedBy?: true
    changedAt?: true
  }

  export type StatusLogCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    changedBy?: true
    changedAt?: true
    _all?: true
  }

  export type StatusLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusLog to aggregate.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusLogs
    **/
    _count?: true | StatusLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusLogMaxAggregateInputType
  }

  export type GetStatusLogAggregateType<T extends StatusLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusLog[P]>
      : GetScalarType<T[P], AggregateStatusLog[P]>
  }




  export type StatusLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusLogWhereInput
    orderBy?: StatusLogOrderByWithAggregationInput | StatusLogOrderByWithAggregationInput[]
    by: StatusLogScalarFieldEnum[] | StatusLogScalarFieldEnum
    having?: StatusLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusLogCountAggregateInputType | true
    _min?: StatusLogMinAggregateInputType
    _max?: StatusLogMaxAggregateInputType
  }

  export type StatusLogGroupByOutputType = {
    id: string
    orderId: string
    status: $Enums.OrderStatus
    note: string | null
    changedBy: string | null
    changedAt: Date
    _count: StatusLogCountAggregateOutputType | null
    _min: StatusLogMinAggregateOutputType | null
    _max: StatusLogMaxAggregateOutputType | null
  }

  type GetStatusLogGroupByPayload<T extends StatusLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusLogGroupByOutputType[P]>
            : GetScalarType<T[P], StatusLogGroupByOutputType[P]>
        }
      >
    >


  export type StatusLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    changedBy?: boolean
    changedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | StatusLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["statusLog"]>

  export type StatusLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    changedBy?: boolean
    changedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | StatusLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["statusLog"]>

  export type StatusLogSelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    changedBy?: boolean
    changedAt?: boolean
  }

  export type StatusLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | StatusLog$userArgs<ExtArgs>
  }
  export type StatusLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | StatusLog$userArgs<ExtArgs>
  }

  export type $StatusLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusLog"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      status: $Enums.OrderStatus
      note: string | null
      changedBy: string | null
      changedAt: Date
    }, ExtArgs["result"]["statusLog"]>
    composites: {}
  }

  type StatusLogGetPayload<S extends boolean | null | undefined | StatusLogDefaultArgs> = $Result.GetResult<Prisma.$StatusLogPayload, S>

  type StatusLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatusLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatusLogCountAggregateInputType | true
    }

  export interface StatusLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusLog'], meta: { name: 'StatusLog' } }
    /**
     * Find zero or one StatusLog that matches the filter.
     * @param {StatusLogFindUniqueArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusLogFindUniqueArgs>(args: SelectSubset<T, StatusLogFindUniqueArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StatusLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatusLogFindUniqueOrThrowArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StatusLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogFindFirstArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusLogFindFirstArgs>(args?: SelectSubset<T, StatusLogFindFirstArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StatusLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogFindFirstOrThrowArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StatusLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusLogs
     * const statusLogs = await prisma.statusLog.findMany()
     * 
     * // Get first 10 StatusLogs
     * const statusLogs = await prisma.statusLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusLogWithIdOnly = await prisma.statusLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusLogFindManyArgs>(args?: SelectSubset<T, StatusLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StatusLog.
     * @param {StatusLogCreateArgs} args - Arguments to create a StatusLog.
     * @example
     * // Create one StatusLog
     * const StatusLog = await prisma.statusLog.create({
     *   data: {
     *     // ... data to create a StatusLog
     *   }
     * })
     * 
     */
    create<T extends StatusLogCreateArgs>(args: SelectSubset<T, StatusLogCreateArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StatusLogs.
     * @param {StatusLogCreateManyArgs} args - Arguments to create many StatusLogs.
     * @example
     * // Create many StatusLogs
     * const statusLog = await prisma.statusLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusLogCreateManyArgs>(args?: SelectSubset<T, StatusLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusLogs and returns the data saved in the database.
     * @param {StatusLogCreateManyAndReturnArgs} args - Arguments to create many StatusLogs.
     * @example
     * // Create many StatusLogs
     * const statusLog = await prisma.statusLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusLogs and only return the `id`
     * const statusLogWithIdOnly = await prisma.statusLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusLogCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StatusLog.
     * @param {StatusLogDeleteArgs} args - Arguments to delete one StatusLog.
     * @example
     * // Delete one StatusLog
     * const StatusLog = await prisma.statusLog.delete({
     *   where: {
     *     // ... filter to delete one StatusLog
     *   }
     * })
     * 
     */
    delete<T extends StatusLogDeleteArgs>(args: SelectSubset<T, StatusLogDeleteArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StatusLog.
     * @param {StatusLogUpdateArgs} args - Arguments to update one StatusLog.
     * @example
     * // Update one StatusLog
     * const statusLog = await prisma.statusLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusLogUpdateArgs>(args: SelectSubset<T, StatusLogUpdateArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StatusLogs.
     * @param {StatusLogDeleteManyArgs} args - Arguments to filter StatusLogs to delete.
     * @example
     * // Delete a few StatusLogs
     * const { count } = await prisma.statusLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusLogDeleteManyArgs>(args?: SelectSubset<T, StatusLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusLogs
     * const statusLog = await prisma.statusLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusLogUpdateManyArgs>(args: SelectSubset<T, StatusLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusLog.
     * @param {StatusLogUpsertArgs} args - Arguments to update or create a StatusLog.
     * @example
     * // Update or create a StatusLog
     * const statusLog = await prisma.statusLog.upsert({
     *   create: {
     *     // ... data to create a StatusLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusLog we want to update
     *   }
     * })
     */
    upsert<T extends StatusLogUpsertArgs>(args: SelectSubset<T, StatusLogUpsertArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogCountArgs} args - Arguments to filter StatusLogs to count.
     * @example
     * // Count the number of StatusLogs
     * const count = await prisma.statusLog.count({
     *   where: {
     *     // ... the filter for the StatusLogs we want to count
     *   }
     * })
    **/
    count<T extends StatusLogCountArgs>(
      args?: Subset<T, StatusLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusLogAggregateArgs>(args: Subset<T, StatusLogAggregateArgs>): Prisma.PrismaPromise<GetStatusLogAggregateType<T>>

    /**
     * Group by StatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusLogGroupByArgs['orderBy'] }
        : { orderBy?: StatusLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusLog model
   */
  readonly fields: StatusLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends StatusLog$userArgs<ExtArgs> = {}>(args?: Subset<T, StatusLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusLog model
   */ 
  interface StatusLogFieldRefs {
    readonly id: FieldRef<"StatusLog", 'String'>
    readonly orderId: FieldRef<"StatusLog", 'String'>
    readonly status: FieldRef<"StatusLog", 'OrderStatus'>
    readonly note: FieldRef<"StatusLog", 'String'>
    readonly changedBy: FieldRef<"StatusLog", 'String'>
    readonly changedAt: FieldRef<"StatusLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatusLog findUnique
   */
  export type StatusLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog findUniqueOrThrow
   */
  export type StatusLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog findFirst
   */
  export type StatusLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusLogs.
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusLogs.
     */
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * StatusLog findFirstOrThrow
   */
  export type StatusLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusLogs.
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusLogs.
     */
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * StatusLog findMany
   */
  export type StatusLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLogs to fetch.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusLogs.
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * StatusLog create
   */
  export type StatusLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusLog.
     */
    data: XOR<StatusLogCreateInput, StatusLogUncheckedCreateInput>
  }

  /**
   * StatusLog createMany
   */
  export type StatusLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusLogs.
     */
    data: StatusLogCreateManyInput | StatusLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusLog createManyAndReturn
   */
  export type StatusLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StatusLogs.
     */
    data: StatusLogCreateManyInput | StatusLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusLog update
   */
  export type StatusLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusLog.
     */
    data: XOR<StatusLogUpdateInput, StatusLogUncheckedUpdateInput>
    /**
     * Choose, which StatusLog to update.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog updateMany
   */
  export type StatusLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusLogs.
     */
    data: XOR<StatusLogUpdateManyMutationInput, StatusLogUncheckedUpdateManyInput>
    /**
     * Filter which StatusLogs to update
     */
    where?: StatusLogWhereInput
  }

  /**
   * StatusLog upsert
   */
  export type StatusLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusLog to update in case it exists.
     */
    where: StatusLogWhereUniqueInput
    /**
     * In case the StatusLog found by the `where` argument doesn't exist, create a new StatusLog with this data.
     */
    create: XOR<StatusLogCreateInput, StatusLogUncheckedCreateInput>
    /**
     * In case the StatusLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusLogUpdateInput, StatusLogUncheckedUpdateInput>
  }

  /**
   * StatusLog delete
   */
  export type StatusLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter which StatusLog to delete.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog deleteMany
   */
  export type StatusLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusLogs to delete
     */
    where?: StatusLogWhereInput
  }

  /**
   * StatusLog.user
   */
  export type StatusLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * StatusLog without action
   */
  export type StatusLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
  }


  /**
   * Model GarmentType
   */

  export type AggregateGarmentType = {
    _count: GarmentTypeCountAggregateOutputType | null
    _avg: GarmentTypeAvgAggregateOutputType | null
    _sum: GarmentTypeSumAggregateOutputType | null
    _min: GarmentTypeMinAggregateOutputType | null
    _max: GarmentTypeMaxAggregateOutputType | null
  }

  export type GarmentTypeAvgAggregateOutputType = {
    basePrice: Decimal | null
  }

  export type GarmentTypeSumAggregateOutputType = {
    basePrice: Decimal | null
  }

  export type GarmentTypeMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    basePrice: Decimal | null
    category: $Enums.MeasurementCategory | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type GarmentTypeMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    basePrice: Decimal | null
    category: $Enums.MeasurementCategory | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type GarmentTypeCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    basePrice: number
    category: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type GarmentTypeAvgAggregateInputType = {
    basePrice?: true
  }

  export type GarmentTypeSumAggregateInputType = {
    basePrice?: true
  }

  export type GarmentTypeMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    basePrice?: true
    category?: true
    isActive?: true
    createdAt?: true
  }

  export type GarmentTypeMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    basePrice?: true
    category?: true
    isActive?: true
    createdAt?: true
  }

  export type GarmentTypeCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    basePrice?: true
    category?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type GarmentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GarmentType to aggregate.
     */
    where?: GarmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GarmentTypes to fetch.
     */
    orderBy?: GarmentTypeOrderByWithRelationInput | GarmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GarmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GarmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GarmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GarmentTypes
    **/
    _count?: true | GarmentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GarmentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GarmentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GarmentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GarmentTypeMaxAggregateInputType
  }

  export type GetGarmentTypeAggregateType<T extends GarmentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateGarmentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarmentType[P]>
      : GetScalarType<T[P], AggregateGarmentType[P]>
  }




  export type GarmentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GarmentTypeWhereInput
    orderBy?: GarmentTypeOrderByWithAggregationInput | GarmentTypeOrderByWithAggregationInput[]
    by: GarmentTypeScalarFieldEnum[] | GarmentTypeScalarFieldEnum
    having?: GarmentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GarmentTypeCountAggregateInputType | true
    _avg?: GarmentTypeAvgAggregateInputType
    _sum?: GarmentTypeSumAggregateInputType
    _min?: GarmentTypeMinAggregateInputType
    _max?: GarmentTypeMaxAggregateInputType
  }

  export type GarmentTypeGroupByOutputType = {
    id: string
    shopId: string
    name: string
    basePrice: Decimal
    category: $Enums.MeasurementCategory | null
    isActive: boolean
    createdAt: Date
    _count: GarmentTypeCountAggregateOutputType | null
    _avg: GarmentTypeAvgAggregateOutputType | null
    _sum: GarmentTypeSumAggregateOutputType | null
    _min: GarmentTypeMinAggregateOutputType | null
    _max: GarmentTypeMaxAggregateOutputType | null
  }

  type GetGarmentTypeGroupByPayload<T extends GarmentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GarmentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GarmentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GarmentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], GarmentTypeGroupByOutputType[P]>
        }
      >
    >


  export type GarmentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    basePrice?: boolean
    category?: boolean
    isActive?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    items?: boolean | GarmentType$itemsArgs<ExtArgs>
    pricingRules?: boolean | GarmentType$pricingRulesArgs<ExtArgs>
    _count?: boolean | GarmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garmentType"]>

  export type GarmentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    basePrice?: boolean
    category?: boolean
    isActive?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garmentType"]>

  export type GarmentTypeSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    basePrice?: boolean
    category?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type GarmentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    items?: boolean | GarmentType$itemsArgs<ExtArgs>
    pricingRules?: boolean | GarmentType$pricingRulesArgs<ExtArgs>
    _count?: boolean | GarmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GarmentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $GarmentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GarmentType"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
      pricingRules: Prisma.$PricingRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      name: string
      basePrice: Prisma.Decimal
      category: $Enums.MeasurementCategory | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["garmentType"]>
    composites: {}
  }

  type GarmentTypeGetPayload<S extends boolean | null | undefined | GarmentTypeDefaultArgs> = $Result.GetResult<Prisma.$GarmentTypePayload, S>

  type GarmentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GarmentTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GarmentTypeCountAggregateInputType | true
    }

  export interface GarmentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GarmentType'], meta: { name: 'GarmentType' } }
    /**
     * Find zero or one GarmentType that matches the filter.
     * @param {GarmentTypeFindUniqueArgs} args - Arguments to find a GarmentType
     * @example
     * // Get one GarmentType
     * const garmentType = await prisma.garmentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GarmentTypeFindUniqueArgs>(args: SelectSubset<T, GarmentTypeFindUniqueArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GarmentType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GarmentTypeFindUniqueOrThrowArgs} args - Arguments to find a GarmentType
     * @example
     * // Get one GarmentType
     * const garmentType = await prisma.garmentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GarmentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, GarmentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GarmentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarmentTypeFindFirstArgs} args - Arguments to find a GarmentType
     * @example
     * // Get one GarmentType
     * const garmentType = await prisma.garmentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GarmentTypeFindFirstArgs>(args?: SelectSubset<T, GarmentTypeFindFirstArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GarmentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarmentTypeFindFirstOrThrowArgs} args - Arguments to find a GarmentType
     * @example
     * // Get one GarmentType
     * const garmentType = await prisma.garmentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GarmentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, GarmentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GarmentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarmentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GarmentTypes
     * const garmentTypes = await prisma.garmentType.findMany()
     * 
     * // Get first 10 GarmentTypes
     * const garmentTypes = await prisma.garmentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const garmentTypeWithIdOnly = await prisma.garmentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GarmentTypeFindManyArgs>(args?: SelectSubset<T, GarmentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GarmentType.
     * @param {GarmentTypeCreateArgs} args - Arguments to create a GarmentType.
     * @example
     * // Create one GarmentType
     * const GarmentType = await prisma.garmentType.create({
     *   data: {
     *     // ... data to create a GarmentType
     *   }
     * })
     * 
     */
    create<T extends GarmentTypeCreateArgs>(args: SelectSubset<T, GarmentTypeCreateArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GarmentTypes.
     * @param {GarmentTypeCreateManyArgs} args - Arguments to create many GarmentTypes.
     * @example
     * // Create many GarmentTypes
     * const garmentType = await prisma.garmentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GarmentTypeCreateManyArgs>(args?: SelectSubset<T, GarmentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GarmentTypes and returns the data saved in the database.
     * @param {GarmentTypeCreateManyAndReturnArgs} args - Arguments to create many GarmentTypes.
     * @example
     * // Create many GarmentTypes
     * const garmentType = await prisma.garmentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GarmentTypes and only return the `id`
     * const garmentTypeWithIdOnly = await prisma.garmentType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GarmentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, GarmentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GarmentType.
     * @param {GarmentTypeDeleteArgs} args - Arguments to delete one GarmentType.
     * @example
     * // Delete one GarmentType
     * const GarmentType = await prisma.garmentType.delete({
     *   where: {
     *     // ... filter to delete one GarmentType
     *   }
     * })
     * 
     */
    delete<T extends GarmentTypeDeleteArgs>(args: SelectSubset<T, GarmentTypeDeleteArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GarmentType.
     * @param {GarmentTypeUpdateArgs} args - Arguments to update one GarmentType.
     * @example
     * // Update one GarmentType
     * const garmentType = await prisma.garmentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GarmentTypeUpdateArgs>(args: SelectSubset<T, GarmentTypeUpdateArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GarmentTypes.
     * @param {GarmentTypeDeleteManyArgs} args - Arguments to filter GarmentTypes to delete.
     * @example
     * // Delete a few GarmentTypes
     * const { count } = await prisma.garmentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GarmentTypeDeleteManyArgs>(args?: SelectSubset<T, GarmentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GarmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarmentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GarmentTypes
     * const garmentType = await prisma.garmentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GarmentTypeUpdateManyArgs>(args: SelectSubset<T, GarmentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GarmentType.
     * @param {GarmentTypeUpsertArgs} args - Arguments to update or create a GarmentType.
     * @example
     * // Update or create a GarmentType
     * const garmentType = await prisma.garmentType.upsert({
     *   create: {
     *     // ... data to create a GarmentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GarmentType we want to update
     *   }
     * })
     */
    upsert<T extends GarmentTypeUpsertArgs>(args: SelectSubset<T, GarmentTypeUpsertArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GarmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarmentTypeCountArgs} args - Arguments to filter GarmentTypes to count.
     * @example
     * // Count the number of GarmentTypes
     * const count = await prisma.garmentType.count({
     *   where: {
     *     // ... the filter for the GarmentTypes we want to count
     *   }
     * })
    **/
    count<T extends GarmentTypeCountArgs>(
      args?: Subset<T, GarmentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GarmentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GarmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarmentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GarmentTypeAggregateArgs>(args: Subset<T, GarmentTypeAggregateArgs>): Prisma.PrismaPromise<GetGarmentTypeAggregateType<T>>

    /**
     * Group by GarmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarmentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GarmentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GarmentTypeGroupByArgs['orderBy'] }
        : { orderBy?: GarmentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GarmentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGarmentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GarmentType model
   */
  readonly fields: GarmentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GarmentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GarmentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends GarmentType$itemsArgs<ExtArgs> = {}>(args?: Subset<T, GarmentType$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    pricingRules<T extends GarmentType$pricingRulesArgs<ExtArgs> = {}>(args?: Subset<T, GarmentType$pricingRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GarmentType model
   */ 
  interface GarmentTypeFieldRefs {
    readonly id: FieldRef<"GarmentType", 'String'>
    readonly shopId: FieldRef<"GarmentType", 'String'>
    readonly name: FieldRef<"GarmentType", 'String'>
    readonly basePrice: FieldRef<"GarmentType", 'Decimal'>
    readonly category: FieldRef<"GarmentType", 'MeasurementCategory'>
    readonly isActive: FieldRef<"GarmentType", 'Boolean'>
    readonly createdAt: FieldRef<"GarmentType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GarmentType findUnique
   */
  export type GarmentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which GarmentType to fetch.
     */
    where: GarmentTypeWhereUniqueInput
  }

  /**
   * GarmentType findUniqueOrThrow
   */
  export type GarmentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which GarmentType to fetch.
     */
    where: GarmentTypeWhereUniqueInput
  }

  /**
   * GarmentType findFirst
   */
  export type GarmentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which GarmentType to fetch.
     */
    where?: GarmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GarmentTypes to fetch.
     */
    orderBy?: GarmentTypeOrderByWithRelationInput | GarmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GarmentTypes.
     */
    cursor?: GarmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GarmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GarmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GarmentTypes.
     */
    distinct?: GarmentTypeScalarFieldEnum | GarmentTypeScalarFieldEnum[]
  }

  /**
   * GarmentType findFirstOrThrow
   */
  export type GarmentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which GarmentType to fetch.
     */
    where?: GarmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GarmentTypes to fetch.
     */
    orderBy?: GarmentTypeOrderByWithRelationInput | GarmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GarmentTypes.
     */
    cursor?: GarmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GarmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GarmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GarmentTypes.
     */
    distinct?: GarmentTypeScalarFieldEnum | GarmentTypeScalarFieldEnum[]
  }

  /**
   * GarmentType findMany
   */
  export type GarmentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which GarmentTypes to fetch.
     */
    where?: GarmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GarmentTypes to fetch.
     */
    orderBy?: GarmentTypeOrderByWithRelationInput | GarmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GarmentTypes.
     */
    cursor?: GarmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GarmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GarmentTypes.
     */
    skip?: number
    distinct?: GarmentTypeScalarFieldEnum | GarmentTypeScalarFieldEnum[]
  }

  /**
   * GarmentType create
   */
  export type GarmentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a GarmentType.
     */
    data: XOR<GarmentTypeCreateInput, GarmentTypeUncheckedCreateInput>
  }

  /**
   * GarmentType createMany
   */
  export type GarmentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GarmentTypes.
     */
    data: GarmentTypeCreateManyInput | GarmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GarmentType createManyAndReturn
   */
  export type GarmentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GarmentTypes.
     */
    data: GarmentTypeCreateManyInput | GarmentTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GarmentType update
   */
  export type GarmentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a GarmentType.
     */
    data: XOR<GarmentTypeUpdateInput, GarmentTypeUncheckedUpdateInput>
    /**
     * Choose, which GarmentType to update.
     */
    where: GarmentTypeWhereUniqueInput
  }

  /**
   * GarmentType updateMany
   */
  export type GarmentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GarmentTypes.
     */
    data: XOR<GarmentTypeUpdateManyMutationInput, GarmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which GarmentTypes to update
     */
    where?: GarmentTypeWhereInput
  }

  /**
   * GarmentType upsert
   */
  export type GarmentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the GarmentType to update in case it exists.
     */
    where: GarmentTypeWhereUniqueInput
    /**
     * In case the GarmentType found by the `where` argument doesn't exist, create a new GarmentType with this data.
     */
    create: XOR<GarmentTypeCreateInput, GarmentTypeUncheckedCreateInput>
    /**
     * In case the GarmentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GarmentTypeUpdateInput, GarmentTypeUncheckedUpdateInput>
  }

  /**
   * GarmentType delete
   */
  export type GarmentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    /**
     * Filter which GarmentType to delete.
     */
    where: GarmentTypeWhereUniqueInput
  }

  /**
   * GarmentType deleteMany
   */
  export type GarmentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GarmentTypes to delete
     */
    where?: GarmentTypeWhereInput
  }

  /**
   * GarmentType.items
   */
  export type GarmentType$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * GarmentType.pricingRules
   */
  export type GarmentType$pricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    cursor?: PricingRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * GarmentType without action
   */
  export type GarmentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
  }


  /**
   * Model PricingRule
   */

  export type AggregatePricingRule = {
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  export type PricingRuleAvgAggregateOutputType = {
    extraCost: Decimal | null
  }

  export type PricingRuleSumAggregateOutputType = {
    extraCost: Decimal | null
  }

  export type PricingRuleMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    garmentTypeId: string | null
    name: string | null
    extraCost: Decimal | null
    isActive: boolean | null
  }

  export type PricingRuleMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    garmentTypeId: string | null
    name: string | null
    extraCost: Decimal | null
    isActive: boolean | null
  }

  export type PricingRuleCountAggregateOutputType = {
    id: number
    shopId: number
    garmentTypeId: number
    name: number
    extraCost: number
    isActive: number
    _all: number
  }


  export type PricingRuleAvgAggregateInputType = {
    extraCost?: true
  }

  export type PricingRuleSumAggregateInputType = {
    extraCost?: true
  }

  export type PricingRuleMinAggregateInputType = {
    id?: true
    shopId?: true
    garmentTypeId?: true
    name?: true
    extraCost?: true
    isActive?: true
  }

  export type PricingRuleMaxAggregateInputType = {
    id?: true
    shopId?: true
    garmentTypeId?: true
    name?: true
    extraCost?: true
    isActive?: true
  }

  export type PricingRuleCountAggregateInputType = {
    id?: true
    shopId?: true
    garmentTypeId?: true
    name?: true
    extraCost?: true
    isActive?: true
    _all?: true
  }

  export type PricingRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRule to aggregate.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingRules
    **/
    _count?: true | PricingRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingRuleMaxAggregateInputType
  }

  export type GetPricingRuleAggregateType<T extends PricingRuleAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingRule[P]>
      : GetScalarType<T[P], AggregatePricingRule[P]>
  }




  export type PricingRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithAggregationInput | PricingRuleOrderByWithAggregationInput[]
    by: PricingRuleScalarFieldEnum[] | PricingRuleScalarFieldEnum
    having?: PricingRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingRuleCountAggregateInputType | true
    _avg?: PricingRuleAvgAggregateInputType
    _sum?: PricingRuleSumAggregateInputType
    _min?: PricingRuleMinAggregateInputType
    _max?: PricingRuleMaxAggregateInputType
  }

  export type PricingRuleGroupByOutputType = {
    id: string
    shopId: string
    garmentTypeId: string | null
    name: string
    extraCost: Decimal
    isActive: boolean
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  type GetPricingRuleGroupByPayload<T extends PricingRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
            : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
        }
      >
    >


  export type PricingRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    garmentTypeId?: boolean
    name?: boolean
    extraCost?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    garmentType?: boolean | PricingRule$garmentTypeArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    garmentTypeId?: boolean
    name?: boolean
    extraCost?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    garmentType?: boolean | PricingRule$garmentTypeArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectScalar = {
    id?: boolean
    shopId?: boolean
    garmentTypeId?: boolean
    name?: boolean
    extraCost?: boolean
    isActive?: boolean
  }

  export type PricingRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    garmentType?: boolean | PricingRule$garmentTypeArgs<ExtArgs>
  }
  export type PricingRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    garmentType?: boolean | PricingRule$garmentTypeArgs<ExtArgs>
  }

  export type $PricingRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingRule"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      garmentType: Prisma.$GarmentTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      garmentTypeId: string | null
      name: string
      extraCost: Prisma.Decimal
      isActive: boolean
    }, ExtArgs["result"]["pricingRule"]>
    composites: {}
  }

  type PricingRuleGetPayload<S extends boolean | null | undefined | PricingRuleDefaultArgs> = $Result.GetResult<Prisma.$PricingRulePayload, S>

  type PricingRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PricingRuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PricingRuleCountAggregateInputType | true
    }

  export interface PricingRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingRule'], meta: { name: 'PricingRule' } }
    /**
     * Find zero or one PricingRule that matches the filter.
     * @param {PricingRuleFindUniqueArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingRuleFindUniqueArgs>(args: SelectSubset<T, PricingRuleFindUniqueArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PricingRule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PricingRuleFindUniqueOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PricingRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingRuleFindFirstArgs>(args?: SelectSubset<T, PricingRuleFindFirstArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PricingRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PricingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingRules
     * const pricingRules = await prisma.pricingRule.findMany()
     * 
     * // Get first 10 PricingRules
     * const pricingRules = await prisma.pricingRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingRuleFindManyArgs>(args?: SelectSubset<T, PricingRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PricingRule.
     * @param {PricingRuleCreateArgs} args - Arguments to create a PricingRule.
     * @example
     * // Create one PricingRule
     * const PricingRule = await prisma.pricingRule.create({
     *   data: {
     *     // ... data to create a PricingRule
     *   }
     * })
     * 
     */
    create<T extends PricingRuleCreateArgs>(args: SelectSubset<T, PricingRuleCreateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PricingRules.
     * @param {PricingRuleCreateManyArgs} args - Arguments to create many PricingRules.
     * @example
     * // Create many PricingRules
     * const pricingRule = await prisma.pricingRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingRuleCreateManyArgs>(args?: SelectSubset<T, PricingRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingRules and returns the data saved in the database.
     * @param {PricingRuleCreateManyAndReturnArgs} args - Arguments to create many PricingRules.
     * @example
     * // Create many PricingRules
     * const pricingRule = await prisma.pricingRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingRules and only return the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PricingRule.
     * @param {PricingRuleDeleteArgs} args - Arguments to delete one PricingRule.
     * @example
     * // Delete one PricingRule
     * const PricingRule = await prisma.pricingRule.delete({
     *   where: {
     *     // ... filter to delete one PricingRule
     *   }
     * })
     * 
     */
    delete<T extends PricingRuleDeleteArgs>(args: SelectSubset<T, PricingRuleDeleteArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PricingRule.
     * @param {PricingRuleUpdateArgs} args - Arguments to update one PricingRule.
     * @example
     * // Update one PricingRule
     * const pricingRule = await prisma.pricingRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingRuleUpdateArgs>(args: SelectSubset<T, PricingRuleUpdateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PricingRules.
     * @param {PricingRuleDeleteManyArgs} args - Arguments to filter PricingRules to delete.
     * @example
     * // Delete a few PricingRules
     * const { count } = await prisma.pricingRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingRuleDeleteManyArgs>(args?: SelectSubset<T, PricingRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingRules
     * const pricingRule = await prisma.pricingRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingRuleUpdateManyArgs>(args: SelectSubset<T, PricingRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PricingRule.
     * @param {PricingRuleUpsertArgs} args - Arguments to update or create a PricingRule.
     * @example
     * // Update or create a PricingRule
     * const pricingRule = await prisma.pricingRule.upsert({
     *   create: {
     *     // ... data to create a PricingRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingRule we want to update
     *   }
     * })
     */
    upsert<T extends PricingRuleUpsertArgs>(args: SelectSubset<T, PricingRuleUpsertArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleCountArgs} args - Arguments to filter PricingRules to count.
     * @example
     * // Count the number of PricingRules
     * const count = await prisma.pricingRule.count({
     *   where: {
     *     // ... the filter for the PricingRules we want to count
     *   }
     * })
    **/
    count<T extends PricingRuleCountArgs>(
      args?: Subset<T, PricingRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricingRuleAggregateArgs>(args: Subset<T, PricingRuleAggregateArgs>): Prisma.PrismaPromise<GetPricingRuleAggregateType<T>>

    /**
     * Group by PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricingRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingRuleGroupByArgs['orderBy'] }
        : { orderBy?: PricingRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricingRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingRule model
   */
  readonly fields: PricingRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    garmentType<T extends PricingRule$garmentTypeArgs<ExtArgs> = {}>(args?: Subset<T, PricingRule$garmentTypeArgs<ExtArgs>>): Prisma__GarmentTypeClient<$Result.GetResult<Prisma.$GarmentTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PricingRule model
   */ 
  interface PricingRuleFieldRefs {
    readonly id: FieldRef<"PricingRule", 'String'>
    readonly shopId: FieldRef<"PricingRule", 'String'>
    readonly garmentTypeId: FieldRef<"PricingRule", 'String'>
    readonly name: FieldRef<"PricingRule", 'String'>
    readonly extraCost: FieldRef<"PricingRule", 'Decimal'>
    readonly isActive: FieldRef<"PricingRule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PricingRule findUnique
   */
  export type PricingRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findUniqueOrThrow
   */
  export type PricingRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findFirst
   */
  export type PricingRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findFirstOrThrow
   */
  export type PricingRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findMany
   */
  export type PricingRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRules to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule create
   */
  export type PricingRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingRule.
     */
    data: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
  }

  /**
   * PricingRule createMany
   */
  export type PricingRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingRules.
     */
    data: PricingRuleCreateManyInput | PricingRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingRule createManyAndReturn
   */
  export type PricingRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PricingRules.
     */
    data: PricingRuleCreateManyInput | PricingRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingRule update
   */
  export type PricingRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingRule.
     */
    data: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
    /**
     * Choose, which PricingRule to update.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule updateMany
   */
  export type PricingRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingRules.
     */
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyInput>
    /**
     * Filter which PricingRules to update
     */
    where?: PricingRuleWhereInput
  }

  /**
   * PricingRule upsert
   */
  export type PricingRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingRule to update in case it exists.
     */
    where: PricingRuleWhereUniqueInput
    /**
     * In case the PricingRule found by the `where` argument doesn't exist, create a new PricingRule with this data.
     */
    create: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
    /**
     * In case the PricingRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
  }

  /**
   * PricingRule delete
   */
  export type PricingRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter which PricingRule to delete.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule deleteMany
   */
  export type PricingRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRules to delete
     */
    where?: PricingRuleWhereInput
  }

  /**
   * PricingRule.garmentType
   */
  export type PricingRule$garmentTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarmentType
     */
    select?: GarmentTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarmentTypeInclude<ExtArgs> | null
    where?: GarmentTypeWhereInput
  }

  /**
   * PricingRule without action
   */
  export type PricingRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    category: $Enums.ExpenseCategory | null
    amount: Decimal | null
    description: string | null
    date: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    category: $Enums.ExpenseCategory | null
    amount: Decimal | null
    description: string | null
    date: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    shopId: number
    category: number
    amount: number
    description: number
    date: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    shopId?: true
    category?: true
    amount?: true
    description?: true
    date?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    shopId?: true
    category?: true
    amount?: true
    description?: true
    date?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    shopId?: true
    category?: true
    amount?: true
    description?: true
    date?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    shopId: string
    category: $Enums.ExpenseCategory
    amount: Decimal
    description: string | null
    date: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    shopId?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
  }

  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      category: $Enums.ExpenseCategory
      amount: Prisma.Decimal
      description: string | null
      date: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */ 
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly shopId: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'ExpenseCategory'>
    readonly amount: FieldRef<"Expense", 'Decimal'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly date: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    logoUrl: 'logoUrl',
    timezone: 'timezone',
    currency: 'currency',
    upiId: 'upiId',
    googleReviewLink: 'googleReviewLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    phone: 'phone',
    whatsapp: 'whatsapp',
    email: 'email',
    address: 'address',
    gender: 'gender',
    birthday: 'birthday',
    anniversary: 'anniversary',
    notes: 'notes',
    tier: 'tier',
    totalOrders: 'totalOrders',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const MeasurementProfileScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    label: 'label',
    category: 'category',
    fields: 'fields',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeasurementProfileScalarFieldEnum = (typeof MeasurementProfileScalarFieldEnum)[keyof typeof MeasurementProfileScalarFieldEnum]


  export const MeasurementVersionScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    fields: 'fields',
    note: 'note',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type MeasurementVersionScalarFieldEnum = (typeof MeasurementVersionScalarFieldEnum)[keyof typeof MeasurementVersionScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    customerId: 'customerId',
    orderNumber: 'orderNumber',
    status: 'status',
    priority: 'priority',
    deliveryDate: 'deliveryDate',
    assignedToId: 'assignedToId',
    totalAmount: 'totalAmount',
    advancePaid: 'advancePaid',
    balanceDue: 'balanceDue',
    discountAmount: 'discountAmount',
    discountNote: 'discountNote',
    notes: 'notes',
    isAlteration: 'isAlteration',
    qrCode: 'qrCode',
    trialDate: 'trialDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    garmentTypeId: 'garmentTypeId',
    measurementProfileId: 'measurementProfileId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    addOns: 'addOns',
    notes: 'notes'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderPhotoScalarFieldEnum: {
    id: 'id',
    orderItemId: 'orderItemId',
    url: 'url',
    key: 'key',
    caption: 'caption',
    uploadedAt: 'uploadedAt'
  };

  export type OrderPhotoScalarFieldEnum = (typeof OrderPhotoScalarFieldEnum)[keyof typeof OrderPhotoScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    amount: 'amount',
    method: 'method',
    paidAt: 'paidAt',
    notes: 'notes'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const StatusLogScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    note: 'note',
    changedBy: 'changedBy',
    changedAt: 'changedAt'
  };

  export type StatusLogScalarFieldEnum = (typeof StatusLogScalarFieldEnum)[keyof typeof StatusLogScalarFieldEnum]


  export const GarmentTypeScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    basePrice: 'basePrice',
    category: 'category',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type GarmentTypeScalarFieldEnum = (typeof GarmentTypeScalarFieldEnum)[keyof typeof GarmentTypeScalarFieldEnum]


  export const PricingRuleScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    garmentTypeId: 'garmentTypeId',
    name: 'name',
    extraCost: 'extraCost',
    isActive: 'isActive'
  };

  export type PricingRuleScalarFieldEnum = (typeof PricingRuleScalarFieldEnum)[keyof typeof PricingRuleScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    category: 'category',
    amount: 'amount',
    description: 'description',
    date: 'date'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'CustomerTier'
   */
  export type EnumCustomerTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerTier'>
    


  /**
   * Reference to a field of type 'CustomerTier[]'
   */
  export type ListEnumCustomerTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerTier[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MeasurementCategory'
   */
  export type EnumMeasurementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeasurementCategory'>
    


  /**
   * Reference to a field of type 'MeasurementCategory[]'
   */
  export type ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeasurementCategory[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'ExpenseCategory'
   */
  export type EnumExpenseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseCategory'>
    


  /**
   * Reference to a field of type 'ExpenseCategory[]'
   */
  export type ListEnumExpenseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    phone?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    logoUrl?: StringNullableFilter<"Shop"> | string | null
    timezone?: StringFilter<"Shop"> | string
    currency?: StringFilter<"Shop"> | string
    upiId?: StringNullableFilter<"Shop"> | string | null
    googleReviewLink?: StringNullableFilter<"Shop"> | string | null
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    users?: UserListRelationFilter
    customers?: CustomerListRelationFilter
    orders?: OrderListRelationFilter
    garmentTypes?: GarmentTypeListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    upiId?: SortOrderInput | SortOrder
    googleReviewLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    garmentTypes?: GarmentTypeOrderByRelationAggregateInput
    pricingRules?: PricingRuleOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    phone?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    logoUrl?: StringNullableFilter<"Shop"> | string | null
    timezone?: StringFilter<"Shop"> | string
    currency?: StringFilter<"Shop"> | string
    upiId?: StringNullableFilter<"Shop"> | string | null
    googleReviewLink?: StringNullableFilter<"Shop"> | string | null
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    users?: UserListRelationFilter
    customers?: CustomerListRelationFilter
    orders?: OrderListRelationFilter
    garmentTypes?: GarmentTypeListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    upiId?: SortOrderInput | SortOrder
    googleReviewLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    phone?: StringWithAggregatesFilter<"Shop"> | string
    address?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    timezone?: StringWithAggregatesFilter<"Shop"> | string
    currency?: StringWithAggregatesFilter<"Shop"> | string
    upiId?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    googleReviewLink?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    shopId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    assignedOrders?: OrderListRelationFilter
    statusLogs?: StatusLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    assignedOrders?: OrderOrderByRelationAggregateInput
    statusLogs?: StatusLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    shopId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    assignedOrders?: OrderListRelationFilter
    statusLogs?: StatusLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    shopId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    whatsapp?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    gender?: EnumGenderNullableFilter<"Customer"> | $Enums.Gender | null
    birthday?: DateTimeNullableFilter<"Customer"> | Date | string | null
    anniversary?: DateTimeNullableFilter<"Customer"> | Date | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    tier?: EnumCustomerTierFilter<"Customer"> | $Enums.CustomerTier
    totalOrders?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    measurements?: MeasurementProfileListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    anniversary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    tier?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    measurements?: MeasurementProfileOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId_phone?: CustomerShopIdPhoneCompoundUniqueInput
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    shopId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    whatsapp?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    gender?: EnumGenderNullableFilter<"Customer"> | $Enums.Gender | null
    birthday?: DateTimeNullableFilter<"Customer"> | Date | string | null
    anniversary?: DateTimeNullableFilter<"Customer"> | Date | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    tier?: EnumCustomerTierFilter<"Customer"> | $Enums.CustomerTier
    totalOrders?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    measurements?: MeasurementProfileListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "shopId_phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    anniversary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    tier?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    shopId?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    whatsapp?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Customer"> | $Enums.Gender | null
    birthday?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    anniversary?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    tier?: EnumCustomerTierWithAggregatesFilter<"Customer"> | $Enums.CustomerTier
    totalOrders?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type MeasurementProfileWhereInput = {
    AND?: MeasurementProfileWhereInput | MeasurementProfileWhereInput[]
    OR?: MeasurementProfileWhereInput[]
    NOT?: MeasurementProfileWhereInput | MeasurementProfileWhereInput[]
    id?: StringFilter<"MeasurementProfile"> | string
    customerId?: StringFilter<"MeasurementProfile"> | string
    label?: StringFilter<"MeasurementProfile"> | string
    category?: EnumMeasurementCategoryFilter<"MeasurementProfile"> | $Enums.MeasurementCategory
    fields?: JsonFilter<"MeasurementProfile">
    isDefault?: BoolFilter<"MeasurementProfile"> | boolean
    createdAt?: DateTimeFilter<"MeasurementProfile"> | Date | string
    updatedAt?: DateTimeFilter<"MeasurementProfile"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    versions?: MeasurementVersionListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type MeasurementProfileOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    label?: SortOrder
    category?: SortOrder
    fields?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    versions?: MeasurementVersionOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type MeasurementProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeasurementProfileWhereInput | MeasurementProfileWhereInput[]
    OR?: MeasurementProfileWhereInput[]
    NOT?: MeasurementProfileWhereInput | MeasurementProfileWhereInput[]
    customerId?: StringFilter<"MeasurementProfile"> | string
    label?: StringFilter<"MeasurementProfile"> | string
    category?: EnumMeasurementCategoryFilter<"MeasurementProfile"> | $Enums.MeasurementCategory
    fields?: JsonFilter<"MeasurementProfile">
    isDefault?: BoolFilter<"MeasurementProfile"> | boolean
    createdAt?: DateTimeFilter<"MeasurementProfile"> | Date | string
    updatedAt?: DateTimeFilter<"MeasurementProfile"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    versions?: MeasurementVersionListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type MeasurementProfileOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    label?: SortOrder
    category?: SortOrder
    fields?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeasurementProfileCountOrderByAggregateInput
    _max?: MeasurementProfileMaxOrderByAggregateInput
    _min?: MeasurementProfileMinOrderByAggregateInput
  }

  export type MeasurementProfileScalarWhereWithAggregatesInput = {
    AND?: MeasurementProfileScalarWhereWithAggregatesInput | MeasurementProfileScalarWhereWithAggregatesInput[]
    OR?: MeasurementProfileScalarWhereWithAggregatesInput[]
    NOT?: MeasurementProfileScalarWhereWithAggregatesInput | MeasurementProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeasurementProfile"> | string
    customerId?: StringWithAggregatesFilter<"MeasurementProfile"> | string
    label?: StringWithAggregatesFilter<"MeasurementProfile"> | string
    category?: EnumMeasurementCategoryWithAggregatesFilter<"MeasurementProfile"> | $Enums.MeasurementCategory
    fields?: JsonWithAggregatesFilter<"MeasurementProfile">
    isDefault?: BoolWithAggregatesFilter<"MeasurementProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MeasurementProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MeasurementProfile"> | Date | string
  }

  export type MeasurementVersionWhereInput = {
    AND?: MeasurementVersionWhereInput | MeasurementVersionWhereInput[]
    OR?: MeasurementVersionWhereInput[]
    NOT?: MeasurementVersionWhereInput | MeasurementVersionWhereInput[]
    id?: StringFilter<"MeasurementVersion"> | string
    profileId?: StringFilter<"MeasurementVersion"> | string
    fields?: JsonFilter<"MeasurementVersion">
    note?: StringNullableFilter<"MeasurementVersion"> | string | null
    createdAt?: DateTimeFilter<"MeasurementVersion"> | Date | string
    createdBy?: StringNullableFilter<"MeasurementVersion"> | string | null
    profile?: XOR<MeasurementProfileRelationFilter, MeasurementProfileWhereInput>
  }

  export type MeasurementVersionOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    fields?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    profile?: MeasurementProfileOrderByWithRelationInput
  }

  export type MeasurementVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeasurementVersionWhereInput | MeasurementVersionWhereInput[]
    OR?: MeasurementVersionWhereInput[]
    NOT?: MeasurementVersionWhereInput | MeasurementVersionWhereInput[]
    profileId?: StringFilter<"MeasurementVersion"> | string
    fields?: JsonFilter<"MeasurementVersion">
    note?: StringNullableFilter<"MeasurementVersion"> | string | null
    createdAt?: DateTimeFilter<"MeasurementVersion"> | Date | string
    createdBy?: StringNullableFilter<"MeasurementVersion"> | string | null
    profile?: XOR<MeasurementProfileRelationFilter, MeasurementProfileWhereInput>
  }, "id">

  export type MeasurementVersionOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    fields?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: MeasurementVersionCountOrderByAggregateInput
    _max?: MeasurementVersionMaxOrderByAggregateInput
    _min?: MeasurementVersionMinOrderByAggregateInput
  }

  export type MeasurementVersionScalarWhereWithAggregatesInput = {
    AND?: MeasurementVersionScalarWhereWithAggregatesInput | MeasurementVersionScalarWhereWithAggregatesInput[]
    OR?: MeasurementVersionScalarWhereWithAggregatesInput[]
    NOT?: MeasurementVersionScalarWhereWithAggregatesInput | MeasurementVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeasurementVersion"> | string
    profileId?: StringWithAggregatesFilter<"MeasurementVersion"> | string
    fields?: JsonWithAggregatesFilter<"MeasurementVersion">
    note?: StringNullableWithAggregatesFilter<"MeasurementVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MeasurementVersion"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"MeasurementVersion"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    shopId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumPriorityFilter<"Order"> | $Enums.Priority
    deliveryDate?: DateTimeFilter<"Order"> | Date | string
    assignedToId?: StringNullableFilter<"Order"> | string | null
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountNote?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    isAlteration?: BoolFilter<"Order"> | boolean
    qrCode?: StringNullableFilter<"Order"> | string | null
    trialDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    assignedTo?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: OrderItemListRelationFilter
    payments?: PaymentListRelationFilter
    statusLogs?: StatusLogListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    deliveryDate?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    advancePaid?: SortOrder
    balanceDue?: SortOrder
    discountAmount?: SortOrder
    discountNote?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isAlteration?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    trialDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    statusLogs?: StatusLogOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId_orderNumber?: OrderShopIdOrderNumberCompoundUniqueInput
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    shopId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumPriorityFilter<"Order"> | $Enums.Priority
    deliveryDate?: DateTimeFilter<"Order"> | Date | string
    assignedToId?: StringNullableFilter<"Order"> | string | null
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountNote?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    isAlteration?: BoolFilter<"Order"> | boolean
    qrCode?: StringNullableFilter<"Order"> | string | null
    trialDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    assignedTo?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: OrderItemListRelationFilter
    payments?: PaymentListRelationFilter
    statusLogs?: StatusLogListRelationFilter
  }, "id" | "shopId_orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    deliveryDate?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    advancePaid?: SortOrder
    balanceDue?: SortOrder
    discountAmount?: SortOrder
    discountNote?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isAlteration?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    trialDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    shopId?: StringWithAggregatesFilter<"Order"> | string
    customerId?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumPriorityWithAggregatesFilter<"Order"> | $Enums.Priority
    deliveryDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    assignedToId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountNote?: StringNullableWithAggregatesFilter<"Order"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    isAlteration?: BoolWithAggregatesFilter<"Order"> | boolean
    qrCode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    trialDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    garmentTypeId?: StringFilter<"OrderItem"> | string
    measurementProfileId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    addOns?: JsonFilter<"OrderItem">
    notes?: StringNullableFilter<"OrderItem"> | string | null
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    garmentType?: XOR<GarmentTypeRelationFilter, GarmentTypeWhereInput>
    measurementProfile?: XOR<MeasurementProfileNullableRelationFilter, MeasurementProfileWhereInput> | null
    photos?: OrderPhotoListRelationFilter
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    garmentTypeId?: SortOrder
    measurementProfileId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    addOns?: SortOrder
    notes?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    garmentType?: GarmentTypeOrderByWithRelationInput
    measurementProfile?: MeasurementProfileOrderByWithRelationInput
    photos?: OrderPhotoOrderByRelationAggregateInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    garmentTypeId?: StringFilter<"OrderItem"> | string
    measurementProfileId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    addOns?: JsonFilter<"OrderItem">
    notes?: StringNullableFilter<"OrderItem"> | string | null
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    garmentType?: XOR<GarmentTypeRelationFilter, GarmentTypeWhereInput>
    measurementProfile?: XOR<MeasurementProfileNullableRelationFilter, MeasurementProfileWhereInput> | null
    photos?: OrderPhotoListRelationFilter
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    garmentTypeId?: SortOrder
    measurementProfileId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    addOns?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    garmentTypeId?: StringWithAggregatesFilter<"OrderItem"> | string
    measurementProfileId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    addOns?: JsonWithAggregatesFilter<"OrderItem">
    notes?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
  }

  export type OrderPhotoWhereInput = {
    AND?: OrderPhotoWhereInput | OrderPhotoWhereInput[]
    OR?: OrderPhotoWhereInput[]
    NOT?: OrderPhotoWhereInput | OrderPhotoWhereInput[]
    id?: StringFilter<"OrderPhoto"> | string
    orderItemId?: StringFilter<"OrderPhoto"> | string
    url?: StringFilter<"OrderPhoto"> | string
    key?: StringFilter<"OrderPhoto"> | string
    caption?: StringNullableFilter<"OrderPhoto"> | string | null
    uploadedAt?: DateTimeFilter<"OrderPhoto"> | Date | string
    orderItem?: XOR<OrderItemRelationFilter, OrderItemWhereInput>
  }

  export type OrderPhotoOrderByWithRelationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    url?: SortOrder
    key?: SortOrder
    caption?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    orderItem?: OrderItemOrderByWithRelationInput
  }

  export type OrderPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderPhotoWhereInput | OrderPhotoWhereInput[]
    OR?: OrderPhotoWhereInput[]
    NOT?: OrderPhotoWhereInput | OrderPhotoWhereInput[]
    orderItemId?: StringFilter<"OrderPhoto"> | string
    url?: StringFilter<"OrderPhoto"> | string
    key?: StringFilter<"OrderPhoto"> | string
    caption?: StringNullableFilter<"OrderPhoto"> | string | null
    uploadedAt?: DateTimeFilter<"OrderPhoto"> | Date | string
    orderItem?: XOR<OrderItemRelationFilter, OrderItemWhereInput>
  }, "id">

  export type OrderPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    url?: SortOrder
    key?: SortOrder
    caption?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: OrderPhotoCountOrderByAggregateInput
    _max?: OrderPhotoMaxOrderByAggregateInput
    _min?: OrderPhotoMinOrderByAggregateInput
  }

  export type OrderPhotoScalarWhereWithAggregatesInput = {
    AND?: OrderPhotoScalarWhereWithAggregatesInput | OrderPhotoScalarWhereWithAggregatesInput[]
    OR?: OrderPhotoScalarWhereWithAggregatesInput[]
    NOT?: OrderPhotoScalarWhereWithAggregatesInput | OrderPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderPhoto"> | string
    orderItemId?: StringWithAggregatesFilter<"OrderPhoto"> | string
    url?: StringWithAggregatesFilter<"OrderPhoto"> | string
    key?: StringWithAggregatesFilter<"OrderPhoto"> | string
    caption?: StringNullableWithAggregatesFilter<"OrderPhoto"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"OrderPhoto"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    notes?: StringNullableFilter<"Payment"> | string | null
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    orderId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    notes?: StringNullableFilter<"Payment"> | string | null
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
  }

  export type StatusLogWhereInput = {
    AND?: StatusLogWhereInput | StatusLogWhereInput[]
    OR?: StatusLogWhereInput[]
    NOT?: StatusLogWhereInput | StatusLogWhereInput[]
    id?: StringFilter<"StatusLog"> | string
    orderId?: StringFilter<"StatusLog"> | string
    status?: EnumOrderStatusFilter<"StatusLog"> | $Enums.OrderStatus
    note?: StringNullableFilter<"StatusLog"> | string | null
    changedBy?: StringNullableFilter<"StatusLog"> | string | null
    changedAt?: DateTimeFilter<"StatusLog"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type StatusLogOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    changedBy?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StatusLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusLogWhereInput | StatusLogWhereInput[]
    OR?: StatusLogWhereInput[]
    NOT?: StatusLogWhereInput | StatusLogWhereInput[]
    orderId?: StringFilter<"StatusLog"> | string
    status?: EnumOrderStatusFilter<"StatusLog"> | $Enums.OrderStatus
    note?: StringNullableFilter<"StatusLog"> | string | null
    changedBy?: StringNullableFilter<"StatusLog"> | string | null
    changedAt?: DateTimeFilter<"StatusLog"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type StatusLogOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    changedBy?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    _count?: StatusLogCountOrderByAggregateInput
    _max?: StatusLogMaxOrderByAggregateInput
    _min?: StatusLogMinOrderByAggregateInput
  }

  export type StatusLogScalarWhereWithAggregatesInput = {
    AND?: StatusLogScalarWhereWithAggregatesInput | StatusLogScalarWhereWithAggregatesInput[]
    OR?: StatusLogScalarWhereWithAggregatesInput[]
    NOT?: StatusLogScalarWhereWithAggregatesInput | StatusLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusLog"> | string
    orderId?: StringWithAggregatesFilter<"StatusLog"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"StatusLog"> | $Enums.OrderStatus
    note?: StringNullableWithAggregatesFilter<"StatusLog"> | string | null
    changedBy?: StringNullableWithAggregatesFilter<"StatusLog"> | string | null
    changedAt?: DateTimeWithAggregatesFilter<"StatusLog"> | Date | string
  }

  export type GarmentTypeWhereInput = {
    AND?: GarmentTypeWhereInput | GarmentTypeWhereInput[]
    OR?: GarmentTypeWhereInput[]
    NOT?: GarmentTypeWhereInput | GarmentTypeWhereInput[]
    id?: StringFilter<"GarmentType"> | string
    shopId?: StringFilter<"GarmentType"> | string
    name?: StringFilter<"GarmentType"> | string
    basePrice?: DecimalFilter<"GarmentType"> | Decimal | DecimalJsLike | number | string
    category?: EnumMeasurementCategoryNullableFilter<"GarmentType"> | $Enums.MeasurementCategory | null
    isActive?: BoolFilter<"GarmentType"> | boolean
    createdAt?: DateTimeFilter<"GarmentType"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    items?: OrderItemListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
  }

  export type GarmentTypeOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    category?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
    pricingRules?: PricingRuleOrderByRelationAggregateInput
  }

  export type GarmentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GarmentTypeWhereInput | GarmentTypeWhereInput[]
    OR?: GarmentTypeWhereInput[]
    NOT?: GarmentTypeWhereInput | GarmentTypeWhereInput[]
    shopId?: StringFilter<"GarmentType"> | string
    name?: StringFilter<"GarmentType"> | string
    basePrice?: DecimalFilter<"GarmentType"> | Decimal | DecimalJsLike | number | string
    category?: EnumMeasurementCategoryNullableFilter<"GarmentType"> | $Enums.MeasurementCategory | null
    isActive?: BoolFilter<"GarmentType"> | boolean
    createdAt?: DateTimeFilter<"GarmentType"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    items?: OrderItemListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
  }, "id">

  export type GarmentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    category?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: GarmentTypeCountOrderByAggregateInput
    _avg?: GarmentTypeAvgOrderByAggregateInput
    _max?: GarmentTypeMaxOrderByAggregateInput
    _min?: GarmentTypeMinOrderByAggregateInput
    _sum?: GarmentTypeSumOrderByAggregateInput
  }

  export type GarmentTypeScalarWhereWithAggregatesInput = {
    AND?: GarmentTypeScalarWhereWithAggregatesInput | GarmentTypeScalarWhereWithAggregatesInput[]
    OR?: GarmentTypeScalarWhereWithAggregatesInput[]
    NOT?: GarmentTypeScalarWhereWithAggregatesInput | GarmentTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GarmentType"> | string
    shopId?: StringWithAggregatesFilter<"GarmentType"> | string
    name?: StringWithAggregatesFilter<"GarmentType"> | string
    basePrice?: DecimalWithAggregatesFilter<"GarmentType"> | Decimal | DecimalJsLike | number | string
    category?: EnumMeasurementCategoryNullableWithAggregatesFilter<"GarmentType"> | $Enums.MeasurementCategory | null
    isActive?: BoolWithAggregatesFilter<"GarmentType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GarmentType"> | Date | string
  }

  export type PricingRuleWhereInput = {
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    id?: StringFilter<"PricingRule"> | string
    shopId?: StringFilter<"PricingRule"> | string
    garmentTypeId?: StringNullableFilter<"PricingRule"> | string | null
    name?: StringFilter<"PricingRule"> | string
    extraCost?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"PricingRule"> | boolean
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    garmentType?: XOR<GarmentTypeNullableRelationFilter, GarmentTypeWhereInput> | null
  }

  export type PricingRuleOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    garmentTypeId?: SortOrderInput | SortOrder
    name?: SortOrder
    extraCost?: SortOrder
    isActive?: SortOrder
    shop?: ShopOrderByWithRelationInput
    garmentType?: GarmentTypeOrderByWithRelationInput
  }

  export type PricingRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    shopId?: StringFilter<"PricingRule"> | string
    garmentTypeId?: StringNullableFilter<"PricingRule"> | string | null
    name?: StringFilter<"PricingRule"> | string
    extraCost?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"PricingRule"> | boolean
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
    garmentType?: XOR<GarmentTypeNullableRelationFilter, GarmentTypeWhereInput> | null
  }, "id">

  export type PricingRuleOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    garmentTypeId?: SortOrderInput | SortOrder
    name?: SortOrder
    extraCost?: SortOrder
    isActive?: SortOrder
    _count?: PricingRuleCountOrderByAggregateInput
    _avg?: PricingRuleAvgOrderByAggregateInput
    _max?: PricingRuleMaxOrderByAggregateInput
    _min?: PricingRuleMinOrderByAggregateInput
    _sum?: PricingRuleSumOrderByAggregateInput
  }

  export type PricingRuleScalarWhereWithAggregatesInput = {
    AND?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    OR?: PricingRuleScalarWhereWithAggregatesInput[]
    NOT?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingRule"> | string
    shopId?: StringWithAggregatesFilter<"PricingRule"> | string
    garmentTypeId?: StringNullableWithAggregatesFilter<"PricingRule"> | string | null
    name?: StringWithAggregatesFilter<"PricingRule"> | string
    extraCost?: DecimalWithAggregatesFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"PricingRule"> | boolean
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    shopId?: StringFilter<"Expense"> | string
    category?: EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    shopId?: StringFilter<"Expense"> | string
    category?: EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    shop?: XOR<ShopRelationFilter, ShopWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    shopId?: StringWithAggregatesFilter<"Expense"> | string
    category?: EnumExpenseCategoryWithAggregatesFilter<"Expense"> | $Enums.ExpenseCategory
    amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type ShopCreateInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    expenses?: ExpenseCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutUsersInput
    assignedOrders?: OrderCreateNestedManyWithoutAssignedToInput
    statusLogs?: StatusLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    shopId: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedOrders?: OrderUncheckedCreateNestedManyWithoutAssignedToInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUsersNestedInput
    assignedOrders?: OrderUpdateManyWithoutAssignedToNestedInput
    statusLogs?: StatusLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedOrders?: OrderUncheckedUpdateManyWithoutAssignedToNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    shopId: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutCustomersInput
    measurements?: MeasurementProfileCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    shopId: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementProfileUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutCustomersNestedInput
    measurements?: MeasurementProfileUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementProfileUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    shopId: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementProfileCreateInput = {
    id?: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMeasurementsInput
    versions?: MeasurementVersionCreateNestedManyWithoutProfileInput
    orderItems?: OrderItemCreateNestedManyWithoutMeasurementProfileInput
  }

  export type MeasurementProfileUncheckedCreateInput = {
    id?: string
    customerId: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MeasurementVersionUncheckedCreateNestedManyWithoutProfileInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMeasurementProfileInput
  }

  export type MeasurementProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMeasurementsNestedInput
    versions?: MeasurementVersionUpdateManyWithoutProfileNestedInput
    orderItems?: OrderItemUpdateManyWithoutMeasurementProfileNestedInput
  }

  export type MeasurementProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MeasurementVersionUncheckedUpdateManyWithoutProfileNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMeasurementProfileNestedInput
  }

  export type MeasurementProfileCreateManyInput = {
    id?: string
    customerId: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementVersionCreateInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    profile: MeasurementProfileCreateNestedOneWithoutVersionsInput
  }

  export type MeasurementVersionUncheckedCreateInput = {
    id?: string
    profileId: string
    fields: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type MeasurementVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: MeasurementProfileUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type MeasurementVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeasurementVersionCreateManyInput = {
    id?: string
    profileId: string
    fields: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type MeasurementVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeasurementVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    shopId: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    shopId: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    order: OrderCreateNestedOneWithoutItemsInput
    garmentType: GarmentTypeCreateNestedOneWithoutItemsInput
    measurementProfile?: MeasurementProfileCreateNestedOneWithoutOrderItemsInput
    photos?: OrderPhotoCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    garmentTypeId: string
    measurementProfileId?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    photos?: OrderPhotoUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    garmentType?: GarmentTypeUpdateOneRequiredWithoutItemsNestedInput
    measurementProfile?: MeasurementProfileUpdateOneWithoutOrderItemsNestedInput
    photos?: OrderPhotoUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: StringFieldUpdateOperationsInput | string
    measurementProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: OrderPhotoUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    garmentTypeId: string
    measurementProfileId?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: StringFieldUpdateOperationsInput | string
    measurementProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderPhotoCreateInput = {
    id?: string
    url: string
    key: string
    caption?: string | null
    uploadedAt?: Date | string
    orderItem: OrderItemCreateNestedOneWithoutPhotosInput
  }

  export type OrderPhotoUncheckedCreateInput = {
    id?: string
    orderItemId: string
    url: string
    key: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type OrderPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItem?: OrderItemUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type OrderPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPhotoCreateManyInput = {
    id?: string
    orderItemId: string
    url: string
    key: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type OrderPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    paidAt?: Date | string
    notes?: string | null
    order: OrderCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    paidAt?: Date | string
    notes?: string | null
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    paidAt?: Date | string
    notes?: string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusLogCreateInput = {
    id?: string
    status: $Enums.OrderStatus
    note?: string | null
    changedAt?: Date | string
    order: OrderCreateNestedOneWithoutStatusLogsInput
    user?: UserCreateNestedOneWithoutStatusLogsInput
  }

  export type StatusLogUncheckedCreateInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    note?: string | null
    changedBy?: string | null
    changedAt?: Date | string
  }

  export type StatusLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutStatusLogsNestedInput
    user?: UserUpdateOneWithoutStatusLogsNestedInput
  }

  export type StatusLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusLogCreateManyInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    note?: string | null
    changedBy?: string | null
    changedAt?: Date | string
  }

  export type StatusLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarmentTypeCreateInput = {
    id?: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutGarmentTypesInput
    items?: OrderItemCreateNestedManyWithoutGarmentTypeInput
    pricingRules?: PricingRuleCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeUncheckedCreateInput = {
    id?: string
    shopId: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutGarmentTypeInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutGarmentTypesNestedInput
    items?: OrderItemUpdateManyWithoutGarmentTypeNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutGarmentTypeNestedInput
  }

  export type GarmentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutGarmentTypeNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutGarmentTypeNestedInput
  }

  export type GarmentTypeCreateManyInput = {
    id?: string
    shopId: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type GarmentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarmentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleCreateInput = {
    id?: string
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    shop: ShopCreateNestedOneWithoutPricingRulesInput
    garmentType?: GarmentTypeCreateNestedOneWithoutPricingRulesInput
  }

  export type PricingRuleUncheckedCreateInput = {
    id?: string
    shopId: string
    garmentTypeId?: string | null
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
  }

  export type PricingRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    shop?: ShopUpdateOneRequiredWithoutPricingRulesNestedInput
    garmentType?: GarmentTypeUpdateOneWithoutPricingRulesNestedInput
  }

  export type PricingRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingRuleCreateManyInput = {
    id?: string
    shopId: string
    garmentTypeId?: string | null
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
  }

  export type PricingRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseCreateInput = {
    id?: string
    category: $Enums.ExpenseCategory
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    shop: ShopCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    shopId: string
    category: $Enums.ExpenseCategory
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    shopId: string
    category: $Enums.ExpenseCategory
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type GarmentTypeListRelationFilter = {
    every?: GarmentTypeWhereInput
    some?: GarmentTypeWhereInput
    none?: GarmentTypeWhereInput
  }

  export type PricingRuleListRelationFilter = {
    every?: PricingRuleWhereInput
    some?: PricingRuleWhereInput
    none?: PricingRuleWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GarmentTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PricingRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    upiId?: SortOrder
    googleReviewLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    upiId?: SortOrder
    googleReviewLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    upiId?: SortOrder
    googleReviewLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShopRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type StatusLogListRelationFilter = {
    every?: StatusLogWhereInput
    some?: StatusLogWhereInput
    none?: StatusLogWhereInput
  }

  export type StatusLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCustomerTierFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerTier | EnumCustomerTierFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTierFilter<$PrismaModel> | $Enums.CustomerTier
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MeasurementProfileListRelationFilter = {
    every?: MeasurementProfileWhereInput
    some?: MeasurementProfileWhereInput
    none?: MeasurementProfileWhereInput
  }

  export type MeasurementProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerShopIdPhoneCompoundUniqueInput = {
    shopId: string
    phone: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    anniversary?: SortOrder
    notes?: SortOrder
    tier?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    totalOrders?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    anniversary?: SortOrder
    notes?: SortOrder
    tier?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    anniversary?: SortOrder
    notes?: SortOrder
    tier?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    totalOrders?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCustomerTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerTier | EnumCustomerTierFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTierWithAggregatesFilter<$PrismaModel> | $Enums.CustomerTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTierFilter<$PrismaModel>
    _max?: NestedEnumCustomerTierFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumMeasurementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementCategoryFilter<$PrismaModel> | $Enums.MeasurementCategory
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type MeasurementVersionListRelationFilter = {
    every?: MeasurementVersionWhereInput
    some?: MeasurementVersionWhereInput
    none?: MeasurementVersionWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type MeasurementVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeasurementProfileCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    label?: SortOrder
    category?: SortOrder
    fields?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeasurementProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    label?: SortOrder
    category?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeasurementProfileMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    label?: SortOrder
    category?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMeasurementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementCategoryFilter<$PrismaModel>
    _max?: NestedEnumMeasurementCategoryFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type MeasurementProfileRelationFilter = {
    is?: MeasurementProfileWhereInput
    isNot?: MeasurementProfileWhereInput
  }

  export type MeasurementVersionCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    fields?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type MeasurementVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type MeasurementVersionMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderShopIdOrderNumberCompoundUniqueInput = {
    shopId: string
    orderNumber: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    deliveryDate?: SortOrder
    assignedToId?: SortOrder
    totalAmount?: SortOrder
    advancePaid?: SortOrder
    balanceDue?: SortOrder
    discountAmount?: SortOrder
    discountNote?: SortOrder
    notes?: SortOrder
    isAlteration?: SortOrder
    qrCode?: SortOrder
    trialDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    advancePaid?: SortOrder
    balanceDue?: SortOrder
    discountAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    deliveryDate?: SortOrder
    assignedToId?: SortOrder
    totalAmount?: SortOrder
    advancePaid?: SortOrder
    balanceDue?: SortOrder
    discountAmount?: SortOrder
    discountNote?: SortOrder
    notes?: SortOrder
    isAlteration?: SortOrder
    qrCode?: SortOrder
    trialDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    deliveryDate?: SortOrder
    assignedToId?: SortOrder
    totalAmount?: SortOrder
    advancePaid?: SortOrder
    balanceDue?: SortOrder
    discountAmount?: SortOrder
    discountNote?: SortOrder
    notes?: SortOrder
    isAlteration?: SortOrder
    qrCode?: SortOrder
    trialDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    advancePaid?: SortOrder
    balanceDue?: SortOrder
    discountAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type GarmentTypeRelationFilter = {
    is?: GarmentTypeWhereInput
    isNot?: GarmentTypeWhereInput
  }

  export type MeasurementProfileNullableRelationFilter = {
    is?: MeasurementProfileWhereInput | null
    isNot?: MeasurementProfileWhereInput | null
  }

  export type OrderPhotoListRelationFilter = {
    every?: OrderPhotoWhereInput
    some?: OrderPhotoWhereInput
    none?: OrderPhotoWhereInput
  }

  export type OrderPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    garmentTypeId?: SortOrder
    measurementProfileId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    addOns?: SortOrder
    notes?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    garmentTypeId?: SortOrder
    measurementProfileId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    notes?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    garmentTypeId?: SortOrder
    measurementProfileId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    notes?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemRelationFilter = {
    is?: OrderItemWhereInput
    isNot?: OrderItemWhereInput
  }

  export type OrderPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    url?: SortOrder
    key?: SortOrder
    caption?: SortOrder
    uploadedAt?: SortOrder
  }

  export type OrderPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    url?: SortOrder
    key?: SortOrder
    caption?: SortOrder
    uploadedAt?: SortOrder
  }

  export type OrderPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    url?: SortOrder
    key?: SortOrder
    caption?: SortOrder
    uploadedAt?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type StatusLogCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
  }

  export type StatusLogMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
  }

  export type StatusLogMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
  }

  export type EnumMeasurementCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeasurementCategoryNullableFilter<$PrismaModel> | $Enums.MeasurementCategory | null
  }

  export type GarmentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type GarmentTypeAvgOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type GarmentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type GarmentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type GarmentTypeSumOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type EnumMeasurementCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeasurementCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMeasurementCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumMeasurementCategoryNullableFilter<$PrismaModel>
  }

  export type GarmentTypeNullableRelationFilter = {
    is?: GarmentTypeWhereInput | null
    isNot?: GarmentTypeWhereInput | null
  }

  export type PricingRuleCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    garmentTypeId?: SortOrder
    name?: SortOrder
    extraCost?: SortOrder
    isActive?: SortOrder
  }

  export type PricingRuleAvgOrderByAggregateInput = {
    extraCost?: SortOrder
  }

  export type PricingRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    garmentTypeId?: SortOrder
    name?: SortOrder
    extraCost?: SortOrder
    isActive?: SortOrder
  }

  export type PricingRuleMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    garmentTypeId?: SortOrder
    name?: SortOrder
    extraCost?: SortOrder
    isActive?: SortOrder
  }

  export type PricingRuleSumOrderByAggregateInput = {
    extraCost?: SortOrder
  }

  export type EnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutShopInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutShopInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type GarmentTypeCreateNestedManyWithoutShopInput = {
    create?: XOR<GarmentTypeCreateWithoutShopInput, GarmentTypeUncheckedCreateWithoutShopInput> | GarmentTypeCreateWithoutShopInput[] | GarmentTypeUncheckedCreateWithoutShopInput[]
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutShopInput | GarmentTypeCreateOrConnectWithoutShopInput[]
    createMany?: GarmentTypeCreateManyShopInputEnvelope
    connect?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
  }

  export type PricingRuleCreateNestedManyWithoutShopInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutShopInput = {
    create?: XOR<ExpenseCreateWithoutShopInput, ExpenseUncheckedCreateWithoutShopInput> | ExpenseCreateWithoutShopInput[] | ExpenseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutShopInput | ExpenseCreateOrConnectWithoutShopInput[]
    createMany?: ExpenseCreateManyShopInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type GarmentTypeUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<GarmentTypeCreateWithoutShopInput, GarmentTypeUncheckedCreateWithoutShopInput> | GarmentTypeCreateWithoutShopInput[] | GarmentTypeUncheckedCreateWithoutShopInput[]
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutShopInput | GarmentTypeCreateOrConnectWithoutShopInput[]
    createMany?: GarmentTypeCreateManyShopInputEnvelope
    connect?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
  }

  export type PricingRuleUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ExpenseCreateWithoutShopInput, ExpenseUncheckedCreateWithoutShopInput> | ExpenseCreateWithoutShopInput[] | ExpenseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutShopInput | ExpenseCreateOrConnectWithoutShopInput[]
    createMany?: ExpenseCreateManyShopInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutShopNestedInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutShopInput | UserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutShopInput | UserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UserUpdateManyWithWhereWithoutShopInput | UserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutShopInput | CustomerUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutShopInput | CustomerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutShopInput | CustomerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShopInput | OrderUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShopInput | OrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShopInput | OrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type GarmentTypeUpdateManyWithoutShopNestedInput = {
    create?: XOR<GarmentTypeCreateWithoutShopInput, GarmentTypeUncheckedCreateWithoutShopInput> | GarmentTypeCreateWithoutShopInput[] | GarmentTypeUncheckedCreateWithoutShopInput[]
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutShopInput | GarmentTypeCreateOrConnectWithoutShopInput[]
    upsert?: GarmentTypeUpsertWithWhereUniqueWithoutShopInput | GarmentTypeUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: GarmentTypeCreateManyShopInputEnvelope
    set?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    disconnect?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    delete?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    connect?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    update?: GarmentTypeUpdateWithWhereUniqueWithoutShopInput | GarmentTypeUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: GarmentTypeUpdateManyWithWhereWithoutShopInput | GarmentTypeUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: GarmentTypeScalarWhereInput | GarmentTypeScalarWhereInput[]
  }

  export type PricingRuleUpdateManyWithoutShopNestedInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutShopInput | PricingRuleUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutShopInput | PricingRuleUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutShopInput | PricingRuleUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutShopNestedInput = {
    create?: XOR<ExpenseCreateWithoutShopInput, ExpenseUncheckedCreateWithoutShopInput> | ExpenseCreateWithoutShopInput[] | ExpenseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutShopInput | ExpenseCreateOrConnectWithoutShopInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutShopInput | ExpenseUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ExpenseCreateManyShopInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutShopInput | ExpenseUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutShopInput | ExpenseUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutShopInput | UserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutShopInput | UserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UserUpdateManyWithWhereWithoutShopInput | UserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutShopInput | CustomerUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutShopInput | CustomerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutShopInput | CustomerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShopInput | OrderUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShopInput | OrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShopInput | OrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type GarmentTypeUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<GarmentTypeCreateWithoutShopInput, GarmentTypeUncheckedCreateWithoutShopInput> | GarmentTypeCreateWithoutShopInput[] | GarmentTypeUncheckedCreateWithoutShopInput[]
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutShopInput | GarmentTypeCreateOrConnectWithoutShopInput[]
    upsert?: GarmentTypeUpsertWithWhereUniqueWithoutShopInput | GarmentTypeUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: GarmentTypeCreateManyShopInputEnvelope
    set?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    disconnect?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    delete?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    connect?: GarmentTypeWhereUniqueInput | GarmentTypeWhereUniqueInput[]
    update?: GarmentTypeUpdateWithWhereUniqueWithoutShopInput | GarmentTypeUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: GarmentTypeUpdateManyWithWhereWithoutShopInput | GarmentTypeUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: GarmentTypeScalarWhereInput | GarmentTypeScalarWhereInput[]
  }

  export type PricingRuleUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutShopInput | PricingRuleUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutShopInput | PricingRuleUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutShopInput | PricingRuleUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ExpenseCreateWithoutShopInput, ExpenseUncheckedCreateWithoutShopInput> | ExpenseCreateWithoutShopInput[] | ExpenseUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutShopInput | ExpenseCreateOrConnectWithoutShopInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutShopInput | ExpenseUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ExpenseCreateManyShopInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutShopInput | ExpenseUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutShopInput | ExpenseUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutUsersInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput
    connect?: ShopWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<OrderCreateWithoutAssignedToInput, OrderUncheckedCreateWithoutAssignedToInput> | OrderCreateWithoutAssignedToInput[] | OrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssignedToInput | OrderCreateOrConnectWithoutAssignedToInput[]
    createMany?: OrderCreateManyAssignedToInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StatusLogCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusLogCreateWithoutUserInput, StatusLogUncheckedCreateWithoutUserInput> | StatusLogCreateWithoutUserInput[] | StatusLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutUserInput | StatusLogCreateOrConnectWithoutUserInput[]
    createMany?: StatusLogCreateManyUserInputEnvelope
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<OrderCreateWithoutAssignedToInput, OrderUncheckedCreateWithoutAssignedToInput> | OrderCreateWithoutAssignedToInput[] | OrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssignedToInput | OrderCreateOrConnectWithoutAssignedToInput[]
    createMany?: OrderCreateManyAssignedToInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StatusLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusLogCreateWithoutUserInput, StatusLogUncheckedCreateWithoutUserInput> | StatusLogCreateWithoutUserInput[] | StatusLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutUserInput | StatusLogCreateOrConnectWithoutUserInput[]
    createMany?: StatusLogCreateManyUserInputEnvelope
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ShopUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput
    upsert?: ShopUpsertWithoutUsersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutUsersInput, ShopUpdateWithoutUsersInput>, ShopUncheckedUpdateWithoutUsersInput>
  }

  export type OrderUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<OrderCreateWithoutAssignedToInput, OrderUncheckedCreateWithoutAssignedToInput> | OrderCreateWithoutAssignedToInput[] | OrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssignedToInput | OrderCreateOrConnectWithoutAssignedToInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAssignedToInput | OrderUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: OrderCreateManyAssignedToInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAssignedToInput | OrderUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAssignedToInput | OrderUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type StatusLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusLogCreateWithoutUserInput, StatusLogUncheckedCreateWithoutUserInput> | StatusLogCreateWithoutUserInput[] | StatusLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutUserInput | StatusLogCreateOrConnectWithoutUserInput[]
    upsert?: StatusLogUpsertWithWhereUniqueWithoutUserInput | StatusLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusLogCreateManyUserInputEnvelope
    set?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    disconnect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    delete?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    update?: StatusLogUpdateWithWhereUniqueWithoutUserInput | StatusLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusLogUpdateManyWithWhereWithoutUserInput | StatusLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<OrderCreateWithoutAssignedToInput, OrderUncheckedCreateWithoutAssignedToInput> | OrderCreateWithoutAssignedToInput[] | OrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssignedToInput | OrderCreateOrConnectWithoutAssignedToInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAssignedToInput | OrderUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: OrderCreateManyAssignedToInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAssignedToInput | OrderUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAssignedToInput | OrderUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type StatusLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusLogCreateWithoutUserInput, StatusLogUncheckedCreateWithoutUserInput> | StatusLogCreateWithoutUserInput[] | StatusLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutUserInput | StatusLogCreateOrConnectWithoutUserInput[]
    upsert?: StatusLogUpsertWithWhereUniqueWithoutUserInput | StatusLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusLogCreateManyUserInputEnvelope
    set?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    disconnect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    delete?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    update?: StatusLogUpdateWithWhereUniqueWithoutUserInput | StatusLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusLogUpdateManyWithWhereWithoutUserInput | StatusLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutCustomersInput = {
    create?: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCustomersInput
    connect?: ShopWhereUniqueInput
  }

  export type MeasurementProfileCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MeasurementProfileCreateWithoutCustomerInput, MeasurementProfileUncheckedCreateWithoutCustomerInput> | MeasurementProfileCreateWithoutCustomerInput[] | MeasurementProfileUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutCustomerInput | MeasurementProfileCreateOrConnectWithoutCustomerInput[]
    createMany?: MeasurementProfileCreateManyCustomerInputEnvelope
    connect?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MeasurementProfileUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MeasurementProfileCreateWithoutCustomerInput, MeasurementProfileUncheckedCreateWithoutCustomerInput> | MeasurementProfileCreateWithoutCustomerInput[] | MeasurementProfileUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutCustomerInput | MeasurementProfileCreateOrConnectWithoutCustomerInput[]
    createMany?: MeasurementProfileCreateManyCustomerInputEnvelope
    connect?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumCustomerTierFieldUpdateOperationsInput = {
    set?: $Enums.CustomerTier
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShopUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCustomersInput
    upsert?: ShopUpsertWithoutCustomersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutCustomersInput, ShopUpdateWithoutCustomersInput>, ShopUncheckedUpdateWithoutCustomersInput>
  }

  export type MeasurementProfileUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MeasurementProfileCreateWithoutCustomerInput, MeasurementProfileUncheckedCreateWithoutCustomerInput> | MeasurementProfileCreateWithoutCustomerInput[] | MeasurementProfileUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutCustomerInput | MeasurementProfileCreateOrConnectWithoutCustomerInput[]
    upsert?: MeasurementProfileUpsertWithWhereUniqueWithoutCustomerInput | MeasurementProfileUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MeasurementProfileCreateManyCustomerInputEnvelope
    set?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    disconnect?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    delete?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    connect?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    update?: MeasurementProfileUpdateWithWhereUniqueWithoutCustomerInput | MeasurementProfileUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MeasurementProfileUpdateManyWithWhereWithoutCustomerInput | MeasurementProfileUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MeasurementProfileScalarWhereInput | MeasurementProfileScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MeasurementProfileUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MeasurementProfileCreateWithoutCustomerInput, MeasurementProfileUncheckedCreateWithoutCustomerInput> | MeasurementProfileCreateWithoutCustomerInput[] | MeasurementProfileUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutCustomerInput | MeasurementProfileCreateOrConnectWithoutCustomerInput[]
    upsert?: MeasurementProfileUpsertWithWhereUniqueWithoutCustomerInput | MeasurementProfileUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MeasurementProfileCreateManyCustomerInputEnvelope
    set?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    disconnect?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    delete?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    connect?: MeasurementProfileWhereUniqueInput | MeasurementProfileWhereUniqueInput[]
    update?: MeasurementProfileUpdateWithWhereUniqueWithoutCustomerInput | MeasurementProfileUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MeasurementProfileUpdateManyWithWhereWithoutCustomerInput | MeasurementProfileUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MeasurementProfileScalarWhereInput | MeasurementProfileScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<CustomerCreateWithoutMeasurementsInput, CustomerUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutMeasurementsInput
    connect?: CustomerWhereUniqueInput
  }

  export type MeasurementVersionCreateNestedManyWithoutProfileInput = {
    create?: XOR<MeasurementVersionCreateWithoutProfileInput, MeasurementVersionUncheckedCreateWithoutProfileInput> | MeasurementVersionCreateWithoutProfileInput[] | MeasurementVersionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MeasurementVersionCreateOrConnectWithoutProfileInput | MeasurementVersionCreateOrConnectWithoutProfileInput[]
    createMany?: MeasurementVersionCreateManyProfileInputEnvelope
    connect?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutMeasurementProfileInput = {
    create?: XOR<OrderItemCreateWithoutMeasurementProfileInput, OrderItemUncheckedCreateWithoutMeasurementProfileInput> | OrderItemCreateWithoutMeasurementProfileInput[] | OrderItemUncheckedCreateWithoutMeasurementProfileInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMeasurementProfileInput | OrderItemCreateOrConnectWithoutMeasurementProfileInput[]
    createMany?: OrderItemCreateManyMeasurementProfileInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type MeasurementVersionUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<MeasurementVersionCreateWithoutProfileInput, MeasurementVersionUncheckedCreateWithoutProfileInput> | MeasurementVersionCreateWithoutProfileInput[] | MeasurementVersionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MeasurementVersionCreateOrConnectWithoutProfileInput | MeasurementVersionCreateOrConnectWithoutProfileInput[]
    createMany?: MeasurementVersionCreateManyProfileInputEnvelope
    connect?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMeasurementProfileInput = {
    create?: XOR<OrderItemCreateWithoutMeasurementProfileInput, OrderItemUncheckedCreateWithoutMeasurementProfileInput> | OrderItemCreateWithoutMeasurementProfileInput[] | OrderItemUncheckedCreateWithoutMeasurementProfileInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMeasurementProfileInput | OrderItemCreateOrConnectWithoutMeasurementProfileInput[]
    createMany?: OrderItemCreateManyMeasurementProfileInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumMeasurementCategoryFieldUpdateOperationsInput = {
    set?: $Enums.MeasurementCategory
  }

  export type CustomerUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<CustomerCreateWithoutMeasurementsInput, CustomerUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutMeasurementsInput
    upsert?: CustomerUpsertWithoutMeasurementsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutMeasurementsInput, CustomerUpdateWithoutMeasurementsInput>, CustomerUncheckedUpdateWithoutMeasurementsInput>
  }

  export type MeasurementVersionUpdateManyWithoutProfileNestedInput = {
    create?: XOR<MeasurementVersionCreateWithoutProfileInput, MeasurementVersionUncheckedCreateWithoutProfileInput> | MeasurementVersionCreateWithoutProfileInput[] | MeasurementVersionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MeasurementVersionCreateOrConnectWithoutProfileInput | MeasurementVersionCreateOrConnectWithoutProfileInput[]
    upsert?: MeasurementVersionUpsertWithWhereUniqueWithoutProfileInput | MeasurementVersionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: MeasurementVersionCreateManyProfileInputEnvelope
    set?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    disconnect?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    delete?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    connect?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    update?: MeasurementVersionUpdateWithWhereUniqueWithoutProfileInput | MeasurementVersionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: MeasurementVersionUpdateManyWithWhereWithoutProfileInput | MeasurementVersionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: MeasurementVersionScalarWhereInput | MeasurementVersionScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutMeasurementProfileNestedInput = {
    create?: XOR<OrderItemCreateWithoutMeasurementProfileInput, OrderItemUncheckedCreateWithoutMeasurementProfileInput> | OrderItemCreateWithoutMeasurementProfileInput[] | OrderItemUncheckedCreateWithoutMeasurementProfileInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMeasurementProfileInput | OrderItemCreateOrConnectWithoutMeasurementProfileInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMeasurementProfileInput | OrderItemUpsertWithWhereUniqueWithoutMeasurementProfileInput[]
    createMany?: OrderItemCreateManyMeasurementProfileInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMeasurementProfileInput | OrderItemUpdateWithWhereUniqueWithoutMeasurementProfileInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMeasurementProfileInput | OrderItemUpdateManyWithWhereWithoutMeasurementProfileInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type MeasurementVersionUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<MeasurementVersionCreateWithoutProfileInput, MeasurementVersionUncheckedCreateWithoutProfileInput> | MeasurementVersionCreateWithoutProfileInput[] | MeasurementVersionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MeasurementVersionCreateOrConnectWithoutProfileInput | MeasurementVersionCreateOrConnectWithoutProfileInput[]
    upsert?: MeasurementVersionUpsertWithWhereUniqueWithoutProfileInput | MeasurementVersionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: MeasurementVersionCreateManyProfileInputEnvelope
    set?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    disconnect?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    delete?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    connect?: MeasurementVersionWhereUniqueInput | MeasurementVersionWhereUniqueInput[]
    update?: MeasurementVersionUpdateWithWhereUniqueWithoutProfileInput | MeasurementVersionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: MeasurementVersionUpdateManyWithWhereWithoutProfileInput | MeasurementVersionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: MeasurementVersionScalarWhereInput | MeasurementVersionScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMeasurementProfileNestedInput = {
    create?: XOR<OrderItemCreateWithoutMeasurementProfileInput, OrderItemUncheckedCreateWithoutMeasurementProfileInput> | OrderItemCreateWithoutMeasurementProfileInput[] | OrderItemUncheckedCreateWithoutMeasurementProfileInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMeasurementProfileInput | OrderItemCreateOrConnectWithoutMeasurementProfileInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMeasurementProfileInput | OrderItemUpsertWithWhereUniqueWithoutMeasurementProfileInput[]
    createMany?: OrderItemCreateManyMeasurementProfileInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMeasurementProfileInput | OrderItemUpdateWithWhereUniqueWithoutMeasurementProfileInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMeasurementProfileInput | OrderItemUpdateManyWithWhereWithoutMeasurementProfileInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type MeasurementProfileCreateNestedOneWithoutVersionsInput = {
    create?: XOR<MeasurementProfileCreateWithoutVersionsInput, MeasurementProfileUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutVersionsInput
    connect?: MeasurementProfileWhereUniqueInput
  }

  export type MeasurementProfileUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<MeasurementProfileCreateWithoutVersionsInput, MeasurementProfileUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutVersionsInput
    upsert?: MeasurementProfileUpsertWithoutVersionsInput
    connect?: MeasurementProfileWhereUniqueInput
    update?: XOR<XOR<MeasurementProfileUpdateToOneWithWhereWithoutVersionsInput, MeasurementProfileUpdateWithoutVersionsInput>, MeasurementProfileUncheckedUpdateWithoutVersionsInput>
  }

  export type ShopCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrdersInput
    connect?: ShopWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedOrdersInput = {
    create?: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StatusLogCreateNestedManyWithoutOrderInput = {
    create?: XOR<StatusLogCreateWithoutOrderInput, StatusLogUncheckedCreateWithoutOrderInput> | StatusLogCreateWithoutOrderInput[] | StatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutOrderInput | StatusLogCreateOrConnectWithoutOrderInput[]
    createMany?: StatusLogCreateManyOrderInputEnvelope
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StatusLogUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<StatusLogCreateWithoutOrderInput, StatusLogUncheckedCreateWithoutOrderInput> | StatusLogCreateWithoutOrderInput[] | StatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutOrderInput | StatusLogCreateOrConnectWithoutOrderInput[]
    createMany?: StatusLogCreateManyOrderInputEnvelope
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ShopUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrdersInput
    upsert?: ShopUpsertWithoutOrdersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutOrdersInput, ShopUpdateWithoutOrdersInput>, ShopUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneWithoutAssignedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedOrdersInput
    upsert?: UserUpsertWithoutAssignedOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedOrdersInput, UserUpdateWithoutAssignedOrdersInput>, UserUncheckedUpdateWithoutAssignedOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type StatusLogUpdateManyWithoutOrderNestedInput = {
    create?: XOR<StatusLogCreateWithoutOrderInput, StatusLogUncheckedCreateWithoutOrderInput> | StatusLogCreateWithoutOrderInput[] | StatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutOrderInput | StatusLogCreateOrConnectWithoutOrderInput[]
    upsert?: StatusLogUpsertWithWhereUniqueWithoutOrderInput | StatusLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: StatusLogCreateManyOrderInputEnvelope
    set?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    disconnect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    delete?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    update?: StatusLogUpdateWithWhereUniqueWithoutOrderInput | StatusLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: StatusLogUpdateManyWithWhereWithoutOrderInput | StatusLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type StatusLogUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<StatusLogCreateWithoutOrderInput, StatusLogUncheckedCreateWithoutOrderInput> | StatusLogCreateWithoutOrderInput[] | StatusLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutOrderInput | StatusLogCreateOrConnectWithoutOrderInput[]
    upsert?: StatusLogUpsertWithWhereUniqueWithoutOrderInput | StatusLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: StatusLogCreateManyOrderInputEnvelope
    set?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    disconnect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    delete?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    update?: StatusLogUpdateWithWhereUniqueWithoutOrderInput | StatusLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: StatusLogUpdateManyWithWhereWithoutOrderInput | StatusLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type GarmentTypeCreateNestedOneWithoutItemsInput = {
    create?: XOR<GarmentTypeCreateWithoutItemsInput, GarmentTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutItemsInput
    connect?: GarmentTypeWhereUniqueInput
  }

  export type MeasurementProfileCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MeasurementProfileCreateWithoutOrderItemsInput, MeasurementProfileUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutOrderItemsInput
    connect?: MeasurementProfileWhereUniqueInput
  }

  export type OrderPhotoCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderPhotoCreateWithoutOrderItemInput, OrderPhotoUncheckedCreateWithoutOrderItemInput> | OrderPhotoCreateWithoutOrderItemInput[] | OrderPhotoUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderPhotoCreateOrConnectWithoutOrderItemInput | OrderPhotoCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderPhotoCreateManyOrderItemInputEnvelope
    connect?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
  }

  export type OrderPhotoUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderPhotoCreateWithoutOrderItemInput, OrderPhotoUncheckedCreateWithoutOrderItemInput> | OrderPhotoCreateWithoutOrderItemInput[] | OrderPhotoUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderPhotoCreateOrConnectWithoutOrderItemInput | OrderPhotoCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderPhotoCreateManyOrderItemInputEnvelope
    connect?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type GarmentTypeUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<GarmentTypeCreateWithoutItemsInput, GarmentTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutItemsInput
    upsert?: GarmentTypeUpsertWithoutItemsInput
    connect?: GarmentTypeWhereUniqueInput
    update?: XOR<XOR<GarmentTypeUpdateToOneWithWhereWithoutItemsInput, GarmentTypeUpdateWithoutItemsInput>, GarmentTypeUncheckedUpdateWithoutItemsInput>
  }

  export type MeasurementProfileUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<MeasurementProfileCreateWithoutOrderItemsInput, MeasurementProfileUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MeasurementProfileCreateOrConnectWithoutOrderItemsInput
    upsert?: MeasurementProfileUpsertWithoutOrderItemsInput
    disconnect?: MeasurementProfileWhereInput | boolean
    delete?: MeasurementProfileWhereInput | boolean
    connect?: MeasurementProfileWhereUniqueInput
    update?: XOR<XOR<MeasurementProfileUpdateToOneWithWhereWithoutOrderItemsInput, MeasurementProfileUpdateWithoutOrderItemsInput>, MeasurementProfileUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderPhotoUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderPhotoCreateWithoutOrderItemInput, OrderPhotoUncheckedCreateWithoutOrderItemInput> | OrderPhotoCreateWithoutOrderItemInput[] | OrderPhotoUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderPhotoCreateOrConnectWithoutOrderItemInput | OrderPhotoCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderPhotoUpsertWithWhereUniqueWithoutOrderItemInput | OrderPhotoUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderPhotoCreateManyOrderItemInputEnvelope
    set?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    disconnect?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    delete?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    connect?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    update?: OrderPhotoUpdateWithWhereUniqueWithoutOrderItemInput | OrderPhotoUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderPhotoUpdateManyWithWhereWithoutOrderItemInput | OrderPhotoUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderPhotoScalarWhereInput | OrderPhotoScalarWhereInput[]
  }

  export type OrderPhotoUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderPhotoCreateWithoutOrderItemInput, OrderPhotoUncheckedCreateWithoutOrderItemInput> | OrderPhotoCreateWithoutOrderItemInput[] | OrderPhotoUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderPhotoCreateOrConnectWithoutOrderItemInput | OrderPhotoCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderPhotoUpsertWithWhereUniqueWithoutOrderItemInput | OrderPhotoUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderPhotoCreateManyOrderItemInputEnvelope
    set?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    disconnect?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    delete?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    connect?: OrderPhotoWhereUniqueInput | OrderPhotoWhereUniqueInput[]
    update?: OrderPhotoUpdateWithWhereUniqueWithoutOrderItemInput | OrderPhotoUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderPhotoUpdateManyWithWhereWithoutOrderItemInput | OrderPhotoUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderPhotoScalarWhereInput | OrderPhotoScalarWhereInput[]
  }

  export type OrderItemCreateNestedOneWithoutPhotosInput = {
    create?: XOR<OrderItemCreateWithoutPhotosInput, OrderItemUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutPhotosInput
    connect?: OrderItemWhereUniqueInput
  }

  export type OrderItemUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<OrderItemCreateWithoutPhotosInput, OrderItemUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutPhotosInput
    upsert?: OrderItemUpsertWithoutPhotosInput
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutPhotosInput, OrderItemUpdateWithoutPhotosInput>, OrderItemUncheckedUpdateWithoutPhotosInput>
  }

  export type OrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    upsert?: OrderUpsertWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentsInput, OrderUpdateWithoutPaymentsInput>, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderCreateNestedOneWithoutStatusLogsInput = {
    create?: XOR<OrderCreateWithoutStatusLogsInput, OrderUncheckedCreateWithoutStatusLogsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStatusLogsInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStatusLogsInput = {
    create?: XOR<UserCreateWithoutStatusLogsInput, UserUncheckedCreateWithoutStatusLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusLogsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutStatusLogsNestedInput = {
    create?: XOR<OrderCreateWithoutStatusLogsInput, OrderUncheckedCreateWithoutStatusLogsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStatusLogsInput
    upsert?: OrderUpsertWithoutStatusLogsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutStatusLogsInput, OrderUpdateWithoutStatusLogsInput>, OrderUncheckedUpdateWithoutStatusLogsInput>
  }

  export type UserUpdateOneWithoutStatusLogsNestedInput = {
    create?: XOR<UserCreateWithoutStatusLogsInput, UserUncheckedCreateWithoutStatusLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusLogsInput
    upsert?: UserUpsertWithoutStatusLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatusLogsInput, UserUpdateWithoutStatusLogsInput>, UserUncheckedUpdateWithoutStatusLogsInput>
  }

  export type ShopCreateNestedOneWithoutGarmentTypesInput = {
    create?: XOR<ShopCreateWithoutGarmentTypesInput, ShopUncheckedCreateWithoutGarmentTypesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutGarmentTypesInput
    connect?: ShopWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutGarmentTypeInput = {
    create?: XOR<OrderItemCreateWithoutGarmentTypeInput, OrderItemUncheckedCreateWithoutGarmentTypeInput> | OrderItemCreateWithoutGarmentTypeInput[] | OrderItemUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutGarmentTypeInput | OrderItemCreateOrConnectWithoutGarmentTypeInput[]
    createMany?: OrderItemCreateManyGarmentTypeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PricingRuleCreateNestedManyWithoutGarmentTypeInput = {
    create?: XOR<PricingRuleCreateWithoutGarmentTypeInput, PricingRuleUncheckedCreateWithoutGarmentTypeInput> | PricingRuleCreateWithoutGarmentTypeInput[] | PricingRuleUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutGarmentTypeInput | PricingRuleCreateOrConnectWithoutGarmentTypeInput[]
    createMany?: PricingRuleCreateManyGarmentTypeInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutGarmentTypeInput = {
    create?: XOR<OrderItemCreateWithoutGarmentTypeInput, OrderItemUncheckedCreateWithoutGarmentTypeInput> | OrderItemCreateWithoutGarmentTypeInput[] | OrderItemUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutGarmentTypeInput | OrderItemCreateOrConnectWithoutGarmentTypeInput[]
    createMany?: OrderItemCreateManyGarmentTypeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PricingRuleUncheckedCreateNestedManyWithoutGarmentTypeInput = {
    create?: XOR<PricingRuleCreateWithoutGarmentTypeInput, PricingRuleUncheckedCreateWithoutGarmentTypeInput> | PricingRuleCreateWithoutGarmentTypeInput[] | PricingRuleUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutGarmentTypeInput | PricingRuleCreateOrConnectWithoutGarmentTypeInput[]
    createMany?: PricingRuleCreateManyGarmentTypeInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type NullableEnumMeasurementCategoryFieldUpdateOperationsInput = {
    set?: $Enums.MeasurementCategory | null
  }

  export type ShopUpdateOneRequiredWithoutGarmentTypesNestedInput = {
    create?: XOR<ShopCreateWithoutGarmentTypesInput, ShopUncheckedCreateWithoutGarmentTypesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutGarmentTypesInput
    upsert?: ShopUpsertWithoutGarmentTypesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutGarmentTypesInput, ShopUpdateWithoutGarmentTypesInput>, ShopUncheckedUpdateWithoutGarmentTypesInput>
  }

  export type OrderItemUpdateManyWithoutGarmentTypeNestedInput = {
    create?: XOR<OrderItemCreateWithoutGarmentTypeInput, OrderItemUncheckedCreateWithoutGarmentTypeInput> | OrderItemCreateWithoutGarmentTypeInput[] | OrderItemUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutGarmentTypeInput | OrderItemCreateOrConnectWithoutGarmentTypeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutGarmentTypeInput | OrderItemUpsertWithWhereUniqueWithoutGarmentTypeInput[]
    createMany?: OrderItemCreateManyGarmentTypeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutGarmentTypeInput | OrderItemUpdateWithWhereUniqueWithoutGarmentTypeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutGarmentTypeInput | OrderItemUpdateManyWithWhereWithoutGarmentTypeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PricingRuleUpdateManyWithoutGarmentTypeNestedInput = {
    create?: XOR<PricingRuleCreateWithoutGarmentTypeInput, PricingRuleUncheckedCreateWithoutGarmentTypeInput> | PricingRuleCreateWithoutGarmentTypeInput[] | PricingRuleUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutGarmentTypeInput | PricingRuleCreateOrConnectWithoutGarmentTypeInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutGarmentTypeInput | PricingRuleUpsertWithWhereUniqueWithoutGarmentTypeInput[]
    createMany?: PricingRuleCreateManyGarmentTypeInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutGarmentTypeInput | PricingRuleUpdateWithWhereUniqueWithoutGarmentTypeInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutGarmentTypeInput | PricingRuleUpdateManyWithWhereWithoutGarmentTypeInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutGarmentTypeNestedInput = {
    create?: XOR<OrderItemCreateWithoutGarmentTypeInput, OrderItemUncheckedCreateWithoutGarmentTypeInput> | OrderItemCreateWithoutGarmentTypeInput[] | OrderItemUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutGarmentTypeInput | OrderItemCreateOrConnectWithoutGarmentTypeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutGarmentTypeInput | OrderItemUpsertWithWhereUniqueWithoutGarmentTypeInput[]
    createMany?: OrderItemCreateManyGarmentTypeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutGarmentTypeInput | OrderItemUpdateWithWhereUniqueWithoutGarmentTypeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutGarmentTypeInput | OrderItemUpdateManyWithWhereWithoutGarmentTypeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PricingRuleUncheckedUpdateManyWithoutGarmentTypeNestedInput = {
    create?: XOR<PricingRuleCreateWithoutGarmentTypeInput, PricingRuleUncheckedCreateWithoutGarmentTypeInput> | PricingRuleCreateWithoutGarmentTypeInput[] | PricingRuleUncheckedCreateWithoutGarmentTypeInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutGarmentTypeInput | PricingRuleCreateOrConnectWithoutGarmentTypeInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutGarmentTypeInput | PricingRuleUpsertWithWhereUniqueWithoutGarmentTypeInput[]
    createMany?: PricingRuleCreateManyGarmentTypeInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutGarmentTypeInput | PricingRuleUpdateWithWhereUniqueWithoutGarmentTypeInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutGarmentTypeInput | PricingRuleUpdateManyWithWhereWithoutGarmentTypeInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutPricingRulesInput = {
    create?: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPricingRulesInput
    connect?: ShopWhereUniqueInput
  }

  export type GarmentTypeCreateNestedOneWithoutPricingRulesInput = {
    create?: XOR<GarmentTypeCreateWithoutPricingRulesInput, GarmentTypeUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutPricingRulesInput
    connect?: GarmentTypeWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutPricingRulesNestedInput = {
    create?: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPricingRulesInput
    upsert?: ShopUpsertWithoutPricingRulesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutPricingRulesInput, ShopUpdateWithoutPricingRulesInput>, ShopUncheckedUpdateWithoutPricingRulesInput>
  }

  export type GarmentTypeUpdateOneWithoutPricingRulesNestedInput = {
    create?: XOR<GarmentTypeCreateWithoutPricingRulesInput, GarmentTypeUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: GarmentTypeCreateOrConnectWithoutPricingRulesInput
    upsert?: GarmentTypeUpsertWithoutPricingRulesInput
    disconnect?: GarmentTypeWhereInput | boolean
    delete?: GarmentTypeWhereInput | boolean
    connect?: GarmentTypeWhereUniqueInput
    update?: XOR<XOR<GarmentTypeUpdateToOneWithWhereWithoutPricingRulesInput, GarmentTypeUpdateWithoutPricingRulesInput>, GarmentTypeUncheckedUpdateWithoutPricingRulesInput>
  }

  export type ShopCreateNestedOneWithoutExpensesInput = {
    create?: XOR<ShopCreateWithoutExpensesInput, ShopUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutExpensesInput
    connect?: ShopWhereUniqueInput
  }

  export type EnumExpenseCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseCategory
  }

  export type ShopUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<ShopCreateWithoutExpensesInput, ShopUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutExpensesInput
    upsert?: ShopUpsertWithoutExpensesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutExpensesInput, ShopUpdateWithoutExpensesInput>, ShopUncheckedUpdateWithoutExpensesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCustomerTierFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerTier | EnumCustomerTierFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTierFilter<$PrismaModel> | $Enums.CustomerTier
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCustomerTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerTier | EnumCustomerTierFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerTier[] | ListEnumCustomerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTierWithAggregatesFilter<$PrismaModel> | $Enums.CustomerTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTierFilter<$PrismaModel>
    _max?: NestedEnumCustomerTierFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMeasurementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementCategoryFilter<$PrismaModel> | $Enums.MeasurementCategory
  }

  export type NestedEnumMeasurementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementCategoryFilter<$PrismaModel>
    _max?: NestedEnumMeasurementCategoryFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumMeasurementCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeasurementCategoryNullableFilter<$PrismaModel> | $Enums.MeasurementCategory | null
  }

  export type NestedEnumMeasurementCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementCategory | EnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeasurementCategory[] | ListEnumMeasurementCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeasurementCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMeasurementCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumMeasurementCategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory
  }

  export type NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryFilter<$PrismaModel>
  }

  export type UserCreateWithoutShopInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedOrders?: OrderCreateNestedManyWithoutAssignedToInput
    statusLogs?: StatusLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedOrders?: OrderUncheckedCreateNestedManyWithoutAssignedToInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
  }

  export type UserCreateManyShopInputEnvelope = {
    data: UserCreateManyShopInput | UserCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutShopInput = {
    id?: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementProfileCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutShopInput = {
    id?: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementProfileUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutShopInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput>
  }

  export type CustomerCreateManyShopInputEnvelope = {
    data: CustomerCreateManyShopInput | CustomerCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutShopInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShopInput = {
    id?: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShopInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput>
  }

  export type OrderCreateManyShopInputEnvelope = {
    data: OrderCreateManyShopInput | OrderCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type GarmentTypeCreateWithoutShopInput = {
    id?: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutGarmentTypeInput
    pricingRules?: PricingRuleCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeUncheckedCreateWithoutShopInput = {
    id?: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutGarmentTypeInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeCreateOrConnectWithoutShopInput = {
    where: GarmentTypeWhereUniqueInput
    create: XOR<GarmentTypeCreateWithoutShopInput, GarmentTypeUncheckedCreateWithoutShopInput>
  }

  export type GarmentTypeCreateManyShopInputEnvelope = {
    data: GarmentTypeCreateManyShopInput | GarmentTypeCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type PricingRuleCreateWithoutShopInput = {
    id?: string
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    garmentType?: GarmentTypeCreateNestedOneWithoutPricingRulesInput
  }

  export type PricingRuleUncheckedCreateWithoutShopInput = {
    id?: string
    garmentTypeId?: string | null
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
  }

  export type PricingRuleCreateOrConnectWithoutShopInput = {
    where: PricingRuleWhereUniqueInput
    create: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput>
  }

  export type PricingRuleCreateManyShopInputEnvelope = {
    data: PricingRuleCreateManyShopInput | PricingRuleCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutShopInput = {
    id?: string
    category: $Enums.ExpenseCategory
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
  }

  export type ExpenseUncheckedCreateWithoutShopInput = {
    id?: string
    category: $Enums.ExpenseCategory
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutShopInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutShopInput, ExpenseUncheckedCreateWithoutShopInput>
  }

  export type ExpenseCreateManyShopInputEnvelope = {
    data: ExpenseCreateManyShopInput | ExpenseCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutShopInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
  }

  export type UserUpdateWithWhereUniqueWithoutShopInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
  }

  export type UserUpdateManyWithWhereWithoutShopInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutShopInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    shopId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutShopInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutShopInput, CustomerUncheckedUpdateWithoutShopInput>
    create: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutShopInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutShopInput, CustomerUncheckedUpdateWithoutShopInput>
  }

  export type CustomerUpdateManyWithWhereWithoutShopInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutShopInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    whatsapp?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    gender?: EnumGenderNullableFilter<"Customer"> | $Enums.Gender | null
    birthday?: DateTimeNullableFilter<"Customer"> | Date | string | null
    anniversary?: DateTimeNullableFilter<"Customer"> | Date | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    tier?: EnumCustomerTierFilter<"Customer"> | $Enums.CustomerTier
    totalOrders?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutShopInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShopInput, OrderUncheckedUpdateWithoutShopInput>
    create: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShopInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShopInput, OrderUncheckedUpdateWithoutShopInput>
  }

  export type OrderUpdateManyWithWhereWithoutShopInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShopInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    shopId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumPriorityFilter<"Order"> | $Enums.Priority
    deliveryDate?: DateTimeFilter<"Order"> | Date | string
    assignedToId?: StringNullableFilter<"Order"> | string | null
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountNote?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    isAlteration?: BoolFilter<"Order"> | boolean
    qrCode?: StringNullableFilter<"Order"> | string | null
    trialDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type GarmentTypeUpsertWithWhereUniqueWithoutShopInput = {
    where: GarmentTypeWhereUniqueInput
    update: XOR<GarmentTypeUpdateWithoutShopInput, GarmentTypeUncheckedUpdateWithoutShopInput>
    create: XOR<GarmentTypeCreateWithoutShopInput, GarmentTypeUncheckedCreateWithoutShopInput>
  }

  export type GarmentTypeUpdateWithWhereUniqueWithoutShopInput = {
    where: GarmentTypeWhereUniqueInput
    data: XOR<GarmentTypeUpdateWithoutShopInput, GarmentTypeUncheckedUpdateWithoutShopInput>
  }

  export type GarmentTypeUpdateManyWithWhereWithoutShopInput = {
    where: GarmentTypeScalarWhereInput
    data: XOR<GarmentTypeUpdateManyMutationInput, GarmentTypeUncheckedUpdateManyWithoutShopInput>
  }

  export type GarmentTypeScalarWhereInput = {
    AND?: GarmentTypeScalarWhereInput | GarmentTypeScalarWhereInput[]
    OR?: GarmentTypeScalarWhereInput[]
    NOT?: GarmentTypeScalarWhereInput | GarmentTypeScalarWhereInput[]
    id?: StringFilter<"GarmentType"> | string
    shopId?: StringFilter<"GarmentType"> | string
    name?: StringFilter<"GarmentType"> | string
    basePrice?: DecimalFilter<"GarmentType"> | Decimal | DecimalJsLike | number | string
    category?: EnumMeasurementCategoryNullableFilter<"GarmentType"> | $Enums.MeasurementCategory | null
    isActive?: BoolFilter<"GarmentType"> | boolean
    createdAt?: DateTimeFilter<"GarmentType"> | Date | string
  }

  export type PricingRuleUpsertWithWhereUniqueWithoutShopInput = {
    where: PricingRuleWhereUniqueInput
    update: XOR<PricingRuleUpdateWithoutShopInput, PricingRuleUncheckedUpdateWithoutShopInput>
    create: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput>
  }

  export type PricingRuleUpdateWithWhereUniqueWithoutShopInput = {
    where: PricingRuleWhereUniqueInput
    data: XOR<PricingRuleUpdateWithoutShopInput, PricingRuleUncheckedUpdateWithoutShopInput>
  }

  export type PricingRuleUpdateManyWithWhereWithoutShopInput = {
    where: PricingRuleScalarWhereInput
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyWithoutShopInput>
  }

  export type PricingRuleScalarWhereInput = {
    AND?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    OR?: PricingRuleScalarWhereInput[]
    NOT?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    id?: StringFilter<"PricingRule"> | string
    shopId?: StringFilter<"PricingRule"> | string
    garmentTypeId?: StringNullableFilter<"PricingRule"> | string | null
    name?: StringFilter<"PricingRule"> | string
    extraCost?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"PricingRule"> | boolean
  }

  export type ExpenseUpsertWithWhereUniqueWithoutShopInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutShopInput, ExpenseUncheckedUpdateWithoutShopInput>
    create: XOR<ExpenseCreateWithoutShopInput, ExpenseUncheckedCreateWithoutShopInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutShopInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutShopInput, ExpenseUncheckedUpdateWithoutShopInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutShopInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutShopInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    shopId?: StringFilter<"Expense"> | string
    category?: EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ShopCreateWithoutUsersInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    expenses?: ExpenseCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutUsersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
  }

  export type OrderCreateWithoutAssignedToInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAssignedToInput = {
    id?: string
    shopId: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAssignedToInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAssignedToInput, OrderUncheckedCreateWithoutAssignedToInput>
  }

  export type OrderCreateManyAssignedToInputEnvelope = {
    data: OrderCreateManyAssignedToInput | OrderCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type StatusLogCreateWithoutUserInput = {
    id?: string
    status: $Enums.OrderStatus
    note?: string | null
    changedAt?: Date | string
    order: OrderCreateNestedOneWithoutStatusLogsInput
  }

  export type StatusLogUncheckedCreateWithoutUserInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    note?: string | null
    changedAt?: Date | string
  }

  export type StatusLogCreateOrConnectWithoutUserInput = {
    where: StatusLogWhereUniqueInput
    create: XOR<StatusLogCreateWithoutUserInput, StatusLogUncheckedCreateWithoutUserInput>
  }

  export type StatusLogCreateManyUserInputEnvelope = {
    data: StatusLogCreateManyUserInput | StatusLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutUsersInput = {
    update: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutUsersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
  }

  export type ShopUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutShopNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutAssignedToInput, OrderUncheckedUpdateWithoutAssignedToInput>
    create: XOR<OrderCreateWithoutAssignedToInput, OrderUncheckedCreateWithoutAssignedToInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutAssignedToInput, OrderUncheckedUpdateWithoutAssignedToInput>
  }

  export type OrderUpdateManyWithWhereWithoutAssignedToInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type StatusLogUpsertWithWhereUniqueWithoutUserInput = {
    where: StatusLogWhereUniqueInput
    update: XOR<StatusLogUpdateWithoutUserInput, StatusLogUncheckedUpdateWithoutUserInput>
    create: XOR<StatusLogCreateWithoutUserInput, StatusLogUncheckedCreateWithoutUserInput>
  }

  export type StatusLogUpdateWithWhereUniqueWithoutUserInput = {
    where: StatusLogWhereUniqueInput
    data: XOR<StatusLogUpdateWithoutUserInput, StatusLogUncheckedUpdateWithoutUserInput>
  }

  export type StatusLogUpdateManyWithWhereWithoutUserInput = {
    where: StatusLogScalarWhereInput
    data: XOR<StatusLogUpdateManyMutationInput, StatusLogUncheckedUpdateManyWithoutUserInput>
  }

  export type StatusLogScalarWhereInput = {
    AND?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
    OR?: StatusLogScalarWhereInput[]
    NOT?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
    id?: StringFilter<"StatusLog"> | string
    orderId?: StringFilter<"StatusLog"> | string
    status?: EnumOrderStatusFilter<"StatusLog"> | $Enums.OrderStatus
    note?: StringNullableFilter<"StatusLog"> | string | null
    changedBy?: StringNullableFilter<"StatusLog"> | string | null
    changedAt?: DateTimeFilter<"StatusLog"> | Date | string
  }

  export type ShopCreateWithoutCustomersInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    expenses?: ExpenseCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutCustomersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
  }

  export type MeasurementProfileCreateWithoutCustomerInput = {
    id?: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MeasurementVersionCreateNestedManyWithoutProfileInput
    orderItems?: OrderItemCreateNestedManyWithoutMeasurementProfileInput
  }

  export type MeasurementProfileUncheckedCreateWithoutCustomerInput = {
    id?: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MeasurementVersionUncheckedCreateNestedManyWithoutProfileInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMeasurementProfileInput
  }

  export type MeasurementProfileCreateOrConnectWithoutCustomerInput = {
    where: MeasurementProfileWhereUniqueInput
    create: XOR<MeasurementProfileCreateWithoutCustomerInput, MeasurementProfileUncheckedCreateWithoutCustomerInput>
  }

  export type MeasurementProfileCreateManyCustomerInputEnvelope = {
    data: MeasurementProfileCreateManyCustomerInput | MeasurementProfileCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    shopId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutCustomersInput = {
    update: XOR<ShopUpdateWithoutCustomersInput, ShopUncheckedUpdateWithoutCustomersInput>
    create: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutCustomersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutCustomersInput, ShopUncheckedUpdateWithoutCustomersInput>
  }

  export type ShopUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutShopNestedInput
  }

  export type MeasurementProfileUpsertWithWhereUniqueWithoutCustomerInput = {
    where: MeasurementProfileWhereUniqueInput
    update: XOR<MeasurementProfileUpdateWithoutCustomerInput, MeasurementProfileUncheckedUpdateWithoutCustomerInput>
    create: XOR<MeasurementProfileCreateWithoutCustomerInput, MeasurementProfileUncheckedCreateWithoutCustomerInput>
  }

  export type MeasurementProfileUpdateWithWhereUniqueWithoutCustomerInput = {
    where: MeasurementProfileWhereUniqueInput
    data: XOR<MeasurementProfileUpdateWithoutCustomerInput, MeasurementProfileUncheckedUpdateWithoutCustomerInput>
  }

  export type MeasurementProfileUpdateManyWithWhereWithoutCustomerInput = {
    where: MeasurementProfileScalarWhereInput
    data: XOR<MeasurementProfileUpdateManyMutationInput, MeasurementProfileUncheckedUpdateManyWithoutCustomerInput>
  }

  export type MeasurementProfileScalarWhereInput = {
    AND?: MeasurementProfileScalarWhereInput | MeasurementProfileScalarWhereInput[]
    OR?: MeasurementProfileScalarWhereInput[]
    NOT?: MeasurementProfileScalarWhereInput | MeasurementProfileScalarWhereInput[]
    id?: StringFilter<"MeasurementProfile"> | string
    customerId?: StringFilter<"MeasurementProfile"> | string
    label?: StringFilter<"MeasurementProfile"> | string
    category?: EnumMeasurementCategoryFilter<"MeasurementProfile"> | $Enums.MeasurementCategory
    fields?: JsonFilter<"MeasurementProfile">
    isDefault?: BoolFilter<"MeasurementProfile"> | boolean
    createdAt?: DateTimeFilter<"MeasurementProfile"> | Date | string
    updatedAt?: DateTimeFilter<"MeasurementProfile"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutMeasurementsInput = {
    id?: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutCustomersInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutMeasurementsInput = {
    id?: string
    shopId: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutMeasurementsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutMeasurementsInput, CustomerUncheckedCreateWithoutMeasurementsInput>
  }

  export type MeasurementVersionCreateWithoutProfileInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type MeasurementVersionUncheckedCreateWithoutProfileInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type MeasurementVersionCreateOrConnectWithoutProfileInput = {
    where: MeasurementVersionWhereUniqueInput
    create: XOR<MeasurementVersionCreateWithoutProfileInput, MeasurementVersionUncheckedCreateWithoutProfileInput>
  }

  export type MeasurementVersionCreateManyProfileInputEnvelope = {
    data: MeasurementVersionCreateManyProfileInput | MeasurementVersionCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutMeasurementProfileInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    order: OrderCreateNestedOneWithoutItemsInput
    garmentType: GarmentTypeCreateNestedOneWithoutItemsInput
    photos?: OrderPhotoCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutMeasurementProfileInput = {
    id?: string
    orderId: string
    garmentTypeId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    photos?: OrderPhotoUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutMeasurementProfileInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMeasurementProfileInput, OrderItemUncheckedCreateWithoutMeasurementProfileInput>
  }

  export type OrderItemCreateManyMeasurementProfileInputEnvelope = {
    data: OrderItemCreateManyMeasurementProfileInput | OrderItemCreateManyMeasurementProfileInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutMeasurementsInput = {
    update: XOR<CustomerUpdateWithoutMeasurementsInput, CustomerUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<CustomerCreateWithoutMeasurementsInput, CustomerUncheckedCreateWithoutMeasurementsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutMeasurementsInput, CustomerUncheckedUpdateWithoutMeasurementsInput>
  }

  export type CustomerUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutCustomersNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type MeasurementVersionUpsertWithWhereUniqueWithoutProfileInput = {
    where: MeasurementVersionWhereUniqueInput
    update: XOR<MeasurementVersionUpdateWithoutProfileInput, MeasurementVersionUncheckedUpdateWithoutProfileInput>
    create: XOR<MeasurementVersionCreateWithoutProfileInput, MeasurementVersionUncheckedCreateWithoutProfileInput>
  }

  export type MeasurementVersionUpdateWithWhereUniqueWithoutProfileInput = {
    where: MeasurementVersionWhereUniqueInput
    data: XOR<MeasurementVersionUpdateWithoutProfileInput, MeasurementVersionUncheckedUpdateWithoutProfileInput>
  }

  export type MeasurementVersionUpdateManyWithWhereWithoutProfileInput = {
    where: MeasurementVersionScalarWhereInput
    data: XOR<MeasurementVersionUpdateManyMutationInput, MeasurementVersionUncheckedUpdateManyWithoutProfileInput>
  }

  export type MeasurementVersionScalarWhereInput = {
    AND?: MeasurementVersionScalarWhereInput | MeasurementVersionScalarWhereInput[]
    OR?: MeasurementVersionScalarWhereInput[]
    NOT?: MeasurementVersionScalarWhereInput | MeasurementVersionScalarWhereInput[]
    id?: StringFilter<"MeasurementVersion"> | string
    profileId?: StringFilter<"MeasurementVersion"> | string
    fields?: JsonFilter<"MeasurementVersion">
    note?: StringNullableFilter<"MeasurementVersion"> | string | null
    createdAt?: DateTimeFilter<"MeasurementVersion"> | Date | string
    createdBy?: StringNullableFilter<"MeasurementVersion"> | string | null
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMeasurementProfileInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMeasurementProfileInput, OrderItemUncheckedUpdateWithoutMeasurementProfileInput>
    create: XOR<OrderItemCreateWithoutMeasurementProfileInput, OrderItemUncheckedCreateWithoutMeasurementProfileInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMeasurementProfileInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMeasurementProfileInput, OrderItemUncheckedUpdateWithoutMeasurementProfileInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMeasurementProfileInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMeasurementProfileInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    garmentTypeId?: StringFilter<"OrderItem"> | string
    measurementProfileId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    addOns?: JsonFilter<"OrderItem">
    notes?: StringNullableFilter<"OrderItem"> | string | null
  }

  export type MeasurementProfileCreateWithoutVersionsInput = {
    id?: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMeasurementsInput
    orderItems?: OrderItemCreateNestedManyWithoutMeasurementProfileInput
  }

  export type MeasurementProfileUncheckedCreateWithoutVersionsInput = {
    id?: string
    customerId: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMeasurementProfileInput
  }

  export type MeasurementProfileCreateOrConnectWithoutVersionsInput = {
    where: MeasurementProfileWhereUniqueInput
    create: XOR<MeasurementProfileCreateWithoutVersionsInput, MeasurementProfileUncheckedCreateWithoutVersionsInput>
  }

  export type MeasurementProfileUpsertWithoutVersionsInput = {
    update: XOR<MeasurementProfileUpdateWithoutVersionsInput, MeasurementProfileUncheckedUpdateWithoutVersionsInput>
    create: XOR<MeasurementProfileCreateWithoutVersionsInput, MeasurementProfileUncheckedCreateWithoutVersionsInput>
    where?: MeasurementProfileWhereInput
  }

  export type MeasurementProfileUpdateToOneWithWhereWithoutVersionsInput = {
    where?: MeasurementProfileWhereInput
    data: XOR<MeasurementProfileUpdateWithoutVersionsInput, MeasurementProfileUncheckedUpdateWithoutVersionsInput>
  }

  export type MeasurementProfileUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMeasurementsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMeasurementProfileNestedInput
  }

  export type MeasurementProfileUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMeasurementProfileNestedInput
  }

  export type ShopCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    expenses?: ExpenseCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutOrdersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutCustomersInput
    measurements?: MeasurementProfileCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    shopId: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    measurements?: MeasurementProfileUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutAssignedOrdersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutUsersInput
    statusLogs?: StatusLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedOrdersInput = {
    id?: string
    shopId: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    garmentType: GarmentTypeCreateNestedOneWithoutItemsInput
    measurementProfile?: MeasurementProfileCreateNestedOneWithoutOrderItemsInput
    photos?: OrderPhotoCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    garmentTypeId: string
    measurementProfileId?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    photos?: OrderPhotoUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    paidAt?: Date | string
    notes?: string | null
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    paidAt?: Date | string
    notes?: string | null
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateManyOrderInputEnvelope = {
    data: PaymentCreateManyOrderInput | PaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type StatusLogCreateWithoutOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    note?: string | null
    changedAt?: Date | string
    user?: UserCreateNestedOneWithoutStatusLogsInput
  }

  export type StatusLogUncheckedCreateWithoutOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    note?: string | null
    changedBy?: string | null
    changedAt?: Date | string
  }

  export type StatusLogCreateOrConnectWithoutOrderInput = {
    where: StatusLogWhereUniqueInput
    create: XOR<StatusLogCreateWithoutOrderInput, StatusLogUncheckedCreateWithoutOrderInput>
  }

  export type StatusLogCreateManyOrderInputEnvelope = {
    data: StatusLogCreateManyOrderInput | StatusLogCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutOrdersInput = {
    update: XOR<ShopUpdateWithoutOrdersInput, ShopUncheckedUpdateWithoutOrdersInput>
    create: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutOrdersInput, ShopUncheckedUpdateWithoutOrdersInput>
  }

  export type ShopUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutShopNestedInput
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutCustomersNestedInput
    measurements?: MeasurementProfileUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementProfileUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserUpsertWithoutAssignedOrdersInput = {
    update: XOR<UserUpdateWithoutAssignedOrdersInput, UserUncheckedUpdateWithoutAssignedOrdersInput>
    create: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedOrdersInput, UserUncheckedUpdateWithoutAssignedOrdersInput>
  }

  export type UserUpdateWithoutAssignedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUsersNestedInput
    statusLogs?: StatusLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusLogs?: StatusLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    notes?: StringNullableFilter<"Payment"> | string | null
  }

  export type StatusLogUpsertWithWhereUniqueWithoutOrderInput = {
    where: StatusLogWhereUniqueInput
    update: XOR<StatusLogUpdateWithoutOrderInput, StatusLogUncheckedUpdateWithoutOrderInput>
    create: XOR<StatusLogCreateWithoutOrderInput, StatusLogUncheckedCreateWithoutOrderInput>
  }

  export type StatusLogUpdateWithWhereUniqueWithoutOrderInput = {
    where: StatusLogWhereUniqueInput
    data: XOR<StatusLogUpdateWithoutOrderInput, StatusLogUncheckedUpdateWithoutOrderInput>
  }

  export type StatusLogUpdateManyWithWhereWithoutOrderInput = {
    where: StatusLogScalarWhereInput
    data: XOR<StatusLogUpdateManyMutationInput, StatusLogUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    shopId: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type GarmentTypeCreateWithoutItemsInput = {
    id?: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutGarmentTypesInput
    pricingRules?: PricingRuleCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeUncheckedCreateWithoutItemsInput = {
    id?: string
    shopId: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeCreateOrConnectWithoutItemsInput = {
    where: GarmentTypeWhereUniqueInput
    create: XOR<GarmentTypeCreateWithoutItemsInput, GarmentTypeUncheckedCreateWithoutItemsInput>
  }

  export type MeasurementProfileCreateWithoutOrderItemsInput = {
    id?: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutMeasurementsInput
    versions?: MeasurementVersionCreateNestedManyWithoutProfileInput
  }

  export type MeasurementProfileUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    customerId: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MeasurementVersionUncheckedCreateNestedManyWithoutProfileInput
  }

  export type MeasurementProfileCreateOrConnectWithoutOrderItemsInput = {
    where: MeasurementProfileWhereUniqueInput
    create: XOR<MeasurementProfileCreateWithoutOrderItemsInput, MeasurementProfileUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderPhotoCreateWithoutOrderItemInput = {
    id?: string
    url: string
    key: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type OrderPhotoUncheckedCreateWithoutOrderItemInput = {
    id?: string
    url: string
    key: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type OrderPhotoCreateOrConnectWithoutOrderItemInput = {
    where: OrderPhotoWhereUniqueInput
    create: XOR<OrderPhotoCreateWithoutOrderItemInput, OrderPhotoUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderPhotoCreateManyOrderItemInputEnvelope = {
    data: OrderPhotoCreateManyOrderItemInput | OrderPhotoCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type GarmentTypeUpsertWithoutItemsInput = {
    update: XOR<GarmentTypeUpdateWithoutItemsInput, GarmentTypeUncheckedUpdateWithoutItemsInput>
    create: XOR<GarmentTypeCreateWithoutItemsInput, GarmentTypeUncheckedCreateWithoutItemsInput>
    where?: GarmentTypeWhereInput
  }

  export type GarmentTypeUpdateToOneWithWhereWithoutItemsInput = {
    where?: GarmentTypeWhereInput
    data: XOR<GarmentTypeUpdateWithoutItemsInput, GarmentTypeUncheckedUpdateWithoutItemsInput>
  }

  export type GarmentTypeUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutGarmentTypesNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutGarmentTypeNestedInput
  }

  export type GarmentTypeUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutGarmentTypeNestedInput
  }

  export type MeasurementProfileUpsertWithoutOrderItemsInput = {
    update: XOR<MeasurementProfileUpdateWithoutOrderItemsInput, MeasurementProfileUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MeasurementProfileCreateWithoutOrderItemsInput, MeasurementProfileUncheckedCreateWithoutOrderItemsInput>
    where?: MeasurementProfileWhereInput
  }

  export type MeasurementProfileUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MeasurementProfileWhereInput
    data: XOR<MeasurementProfileUpdateWithoutOrderItemsInput, MeasurementProfileUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MeasurementProfileUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutMeasurementsNestedInput
    versions?: MeasurementVersionUpdateManyWithoutProfileNestedInput
  }

  export type MeasurementProfileUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MeasurementVersionUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type OrderPhotoUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: OrderPhotoWhereUniqueInput
    update: XOR<OrderPhotoUpdateWithoutOrderItemInput, OrderPhotoUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderPhotoCreateWithoutOrderItemInput, OrderPhotoUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderPhotoUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: OrderPhotoWhereUniqueInput
    data: XOR<OrderPhotoUpdateWithoutOrderItemInput, OrderPhotoUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderPhotoUpdateManyWithWhereWithoutOrderItemInput = {
    where: OrderPhotoScalarWhereInput
    data: XOR<OrderPhotoUpdateManyMutationInput, OrderPhotoUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type OrderPhotoScalarWhereInput = {
    AND?: OrderPhotoScalarWhereInput | OrderPhotoScalarWhereInput[]
    OR?: OrderPhotoScalarWhereInput[]
    NOT?: OrderPhotoScalarWhereInput | OrderPhotoScalarWhereInput[]
    id?: StringFilter<"OrderPhoto"> | string
    orderItemId?: StringFilter<"OrderPhoto"> | string
    url?: StringFilter<"OrderPhoto"> | string
    key?: StringFilter<"OrderPhoto"> | string
    caption?: StringNullableFilter<"OrderPhoto"> | string | null
    uploadedAt?: DateTimeFilter<"OrderPhoto"> | Date | string
  }

  export type OrderItemCreateWithoutPhotosInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    order: OrderCreateNestedOneWithoutItemsInput
    garmentType: GarmentTypeCreateNestedOneWithoutItemsInput
    measurementProfile?: MeasurementProfileCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutPhotosInput = {
    id?: string
    orderId: string
    garmentTypeId: string
    measurementProfileId?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type OrderItemCreateOrConnectWithoutPhotosInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutPhotosInput, OrderItemUncheckedCreateWithoutPhotosInput>
  }

  export type OrderItemUpsertWithoutPhotosInput = {
    update: XOR<OrderItemUpdateWithoutPhotosInput, OrderItemUncheckedUpdateWithoutPhotosInput>
    create: XOR<OrderItemCreateWithoutPhotosInput, OrderItemUncheckedCreateWithoutPhotosInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutPhotosInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutPhotosInput, OrderItemUncheckedUpdateWithoutPhotosInput>
  }

  export type OrderItemUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    garmentType?: GarmentTypeUpdateOneRequiredWithoutItemsNestedInput
    measurementProfile?: MeasurementProfileUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: StringFieldUpdateOperationsInput | string
    measurementProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateWithoutPaymentsInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentsInput = {
    id?: string
    shopId: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    statusLogs?: StatusLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderUpsertWithoutPaymentsInput = {
    update: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutStatusLogsInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrdersInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutStatusLogsInput = {
    id?: string
    shopId: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutStatusLogsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStatusLogsInput, OrderUncheckedCreateWithoutStatusLogsInput>
  }

  export type UserCreateWithoutStatusLogsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutUsersInput
    assignedOrders?: OrderCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutStatusLogsInput = {
    id?: string
    shopId: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedOrders?: OrderUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutStatusLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatusLogsInput, UserUncheckedCreateWithoutStatusLogsInput>
  }

  export type OrderUpsertWithoutStatusLogsInput = {
    update: XOR<OrderUpdateWithoutStatusLogsInput, OrderUncheckedUpdateWithoutStatusLogsInput>
    create: XOR<OrderCreateWithoutStatusLogsInput, OrderUncheckedCreateWithoutStatusLogsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutStatusLogsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutStatusLogsInput, OrderUncheckedUpdateWithoutStatusLogsInput>
  }

  export type OrderUpdateWithoutStatusLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutStatusLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserUpsertWithoutStatusLogsInput = {
    update: XOR<UserUpdateWithoutStatusLogsInput, UserUncheckedUpdateWithoutStatusLogsInput>
    create: XOR<UserCreateWithoutStatusLogsInput, UserUncheckedCreateWithoutStatusLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatusLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatusLogsInput, UserUncheckedUpdateWithoutStatusLogsInput>
  }

  export type UserUpdateWithoutStatusLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUsersNestedInput
    assignedOrders?: OrderUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutStatusLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedOrders?: OrderUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type ShopCreateWithoutGarmentTypesInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    expenses?: ExpenseCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutGarmentTypesInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutGarmentTypesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutGarmentTypesInput, ShopUncheckedCreateWithoutGarmentTypesInput>
  }

  export type OrderItemCreateWithoutGarmentTypeInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    order: OrderCreateNestedOneWithoutItemsInput
    measurementProfile?: MeasurementProfileCreateNestedOneWithoutOrderItemsInput
    photos?: OrderPhotoCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutGarmentTypeInput = {
    id?: string
    orderId: string
    measurementProfileId?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
    photos?: OrderPhotoUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutGarmentTypeInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutGarmentTypeInput, OrderItemUncheckedCreateWithoutGarmentTypeInput>
  }

  export type OrderItemCreateManyGarmentTypeInputEnvelope = {
    data: OrderItemCreateManyGarmentTypeInput | OrderItemCreateManyGarmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type PricingRuleCreateWithoutGarmentTypeInput = {
    id?: string
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    shop: ShopCreateNestedOneWithoutPricingRulesInput
  }

  export type PricingRuleUncheckedCreateWithoutGarmentTypeInput = {
    id?: string
    shopId: string
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
  }

  export type PricingRuleCreateOrConnectWithoutGarmentTypeInput = {
    where: PricingRuleWhereUniqueInput
    create: XOR<PricingRuleCreateWithoutGarmentTypeInput, PricingRuleUncheckedCreateWithoutGarmentTypeInput>
  }

  export type PricingRuleCreateManyGarmentTypeInputEnvelope = {
    data: PricingRuleCreateManyGarmentTypeInput | PricingRuleCreateManyGarmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutGarmentTypesInput = {
    update: XOR<ShopUpdateWithoutGarmentTypesInput, ShopUncheckedUpdateWithoutGarmentTypesInput>
    create: XOR<ShopCreateWithoutGarmentTypesInput, ShopUncheckedCreateWithoutGarmentTypesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutGarmentTypesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutGarmentTypesInput, ShopUncheckedUpdateWithoutGarmentTypesInput>
  }

  export type ShopUpdateWithoutGarmentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutGarmentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutShopNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutGarmentTypeInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutGarmentTypeInput, OrderItemUncheckedUpdateWithoutGarmentTypeInput>
    create: XOR<OrderItemCreateWithoutGarmentTypeInput, OrderItemUncheckedCreateWithoutGarmentTypeInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutGarmentTypeInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutGarmentTypeInput, OrderItemUncheckedUpdateWithoutGarmentTypeInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutGarmentTypeInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutGarmentTypeInput>
  }

  export type PricingRuleUpsertWithWhereUniqueWithoutGarmentTypeInput = {
    where: PricingRuleWhereUniqueInput
    update: XOR<PricingRuleUpdateWithoutGarmentTypeInput, PricingRuleUncheckedUpdateWithoutGarmentTypeInput>
    create: XOR<PricingRuleCreateWithoutGarmentTypeInput, PricingRuleUncheckedCreateWithoutGarmentTypeInput>
  }

  export type PricingRuleUpdateWithWhereUniqueWithoutGarmentTypeInput = {
    where: PricingRuleWhereUniqueInput
    data: XOR<PricingRuleUpdateWithoutGarmentTypeInput, PricingRuleUncheckedUpdateWithoutGarmentTypeInput>
  }

  export type PricingRuleUpdateManyWithWhereWithoutGarmentTypeInput = {
    where: PricingRuleScalarWhereInput
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyWithoutGarmentTypeInput>
  }

  export type ShopCreateWithoutPricingRulesInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeCreateNestedManyWithoutShopInput
    expenses?: ExpenseCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutPricingRulesInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeUncheckedCreateNestedManyWithoutShopInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutPricingRulesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
  }

  export type GarmentTypeCreateWithoutPricingRulesInput = {
    id?: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutGarmentTypesInput
    items?: OrderItemCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeUncheckedCreateWithoutPricingRulesInput = {
    id?: string
    shopId: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutGarmentTypeInput
  }

  export type GarmentTypeCreateOrConnectWithoutPricingRulesInput = {
    where: GarmentTypeWhereUniqueInput
    create: XOR<GarmentTypeCreateWithoutPricingRulesInput, GarmentTypeUncheckedCreateWithoutPricingRulesInput>
  }

  export type ShopUpsertWithoutPricingRulesInput = {
    update: XOR<ShopUpdateWithoutPricingRulesInput, ShopUncheckedUpdateWithoutPricingRulesInput>
    create: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutPricingRulesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutPricingRulesInput, ShopUncheckedUpdateWithoutPricingRulesInput>
  }

  export type ShopUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUncheckedUpdateManyWithoutShopNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutShopNestedInput
  }

  export type GarmentTypeUpsertWithoutPricingRulesInput = {
    update: XOR<GarmentTypeUpdateWithoutPricingRulesInput, GarmentTypeUncheckedUpdateWithoutPricingRulesInput>
    create: XOR<GarmentTypeCreateWithoutPricingRulesInput, GarmentTypeUncheckedCreateWithoutPricingRulesInput>
    where?: GarmentTypeWhereInput
  }

  export type GarmentTypeUpdateToOneWithWhereWithoutPricingRulesInput = {
    where?: GarmentTypeWhereInput
    data: XOR<GarmentTypeUpdateWithoutPricingRulesInput, GarmentTypeUncheckedUpdateWithoutPricingRulesInput>
  }

  export type GarmentTypeUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutGarmentTypesNestedInput
    items?: OrderItemUpdateManyWithoutGarmentTypeNestedInput
  }

  export type GarmentTypeUncheckedUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutGarmentTypeNestedInput
  }

  export type ShopCreateWithoutExpensesInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    logoUrl?: string | null
    timezone?: string
    currency?: string
    upiId?: string | null
    googleReviewLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    garmentTypes?: GarmentTypeUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutExpensesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutExpensesInput, ShopUncheckedCreateWithoutExpensesInput>
  }

  export type ShopUpsertWithoutExpensesInput = {
    update: XOR<ShopUpdateWithoutExpensesInput, ShopUncheckedUpdateWithoutExpensesInput>
    create: XOR<ShopCreateWithoutExpensesInput, ShopUncheckedCreateWithoutExpensesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutExpensesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutExpensesInput, ShopUncheckedUpdateWithoutExpensesInput>
  }

  export type ShopUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    googleReviewLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    garmentTypes?: GarmentTypeUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
  }

  export type UserCreateManyShopInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateManyShopInput = {
    id?: string
    name: string
    phone: string
    whatsapp?: string | null
    email?: string | null
    address?: string | null
    gender?: $Enums.Gender | null
    birthday?: Date | string | null
    anniversary?: Date | string | null
    notes?: string | null
    tier?: $Enums.CustomerTier
    totalOrders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyShopInput = {
    id?: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GarmentTypeCreateManyShopInput = {
    id?: string
    name: string
    basePrice: Decimal | DecimalJsLike | number | string
    category?: $Enums.MeasurementCategory | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PricingRuleCreateManyShopInput = {
    id?: string
    garmentTypeId?: string | null
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
  }

  export type ExpenseCreateManyShopInput = {
    id?: string
    category: $Enums.ExpenseCategory
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
  }

  export type UserUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedOrders?: OrderUpdateManyWithoutAssignedToNestedInput
    statusLogs?: StatusLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedOrders?: OrderUncheckedUpdateManyWithoutAssignedToNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementProfileUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: MeasurementProfileUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anniversary?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: EnumCustomerTierFieldUpdateOperationsInput | $Enums.CustomerTier
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarmentTypeUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutGarmentTypeNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutGarmentTypeNestedInput
  }

  export type GarmentTypeUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutGarmentTypeNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutGarmentTypeNestedInput
  }

  export type GarmentTypeUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableEnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    garmentType?: GarmentTypeUpdateOneWithoutPricingRulesNestedInput
  }

  export type PricingRuleUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingRuleUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyAssignedToInput = {
    id?: string
    shopId: string
    customerId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatusLogCreateManyUserInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    note?: string | null
    changedAt?: Date | string
  }

  export type OrderUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutStatusLogsNestedInput
  }

  export type StatusLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementProfileCreateManyCustomerInput = {
    id?: string
    label: string
    category: $Enums.MeasurementCategory
    fields: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyCustomerInput = {
    id?: string
    shopId: string
    orderNumber: string
    status?: $Enums.OrderStatus
    priority?: $Enums.Priority
    deliveryDate: Date | string
    assignedToId?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    advancePaid?: Decimal | DecimalJsLike | number | string
    balanceDue?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountNote?: string | null
    notes?: string | null
    isAlteration?: boolean
    qrCode?: string | null
    trialDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeasurementProfileUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MeasurementVersionUpdateManyWithoutProfileNestedInput
    orderItems?: OrderItemUpdateManyWithoutMeasurementProfileNestedInput
  }

  export type MeasurementProfileUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MeasurementVersionUncheckedUpdateManyWithoutProfileNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMeasurementProfileNestedInput
  }

  export type MeasurementProfileUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    category?: EnumMeasurementCategoryFieldUpdateOperationsInput | $Enums.MeasurementCategory
    fields?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    statusLogs?: StatusLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    advancePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountNote?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isAlteration?: BoolFieldUpdateOperationsInput | boolean
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trialDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementVersionCreateManyProfileInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type OrderItemCreateManyMeasurementProfileInput = {
    id?: string
    orderId: string
    garmentTypeId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type MeasurementVersionUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeasurementVersionUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeasurementVersionUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemUpdateWithoutMeasurementProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    garmentType?: GarmentTypeUpdateOneRequiredWithoutItemsNestedInput
    photos?: OrderPhotoUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMeasurementProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: OrderPhotoUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutMeasurementProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    garmentTypeId: string
    measurementProfileId?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type PaymentCreateManyOrderInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    paidAt?: Date | string
    notes?: string | null
  }

  export type StatusLogCreateManyOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    note?: string | null
    changedBy?: string | null
    changedAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    garmentType?: GarmentTypeUpdateOneRequiredWithoutItemsNestedInput
    measurementProfile?: MeasurementProfileUpdateOneWithoutOrderItemsNestedInput
    photos?: OrderPhotoUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: StringFieldUpdateOperationsInput | string
    measurementProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: OrderPhotoUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    garmentTypeId?: StringFieldUpdateOperationsInput | string
    measurementProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusLogUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStatusLogsNestedInput
  }

  export type StatusLogUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusLogUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPhotoCreateManyOrderItemInput = {
    id?: string
    url: string
    key: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type OrderPhotoUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPhotoUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPhotoUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyGarmentTypeInput = {
    id?: string
    orderId: string
    measurementProfileId?: string | null
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type PricingRuleCreateManyGarmentTypeInput = {
    id?: string
    shopId: string
    name: string
    extraCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
  }

  export type OrderItemUpdateWithoutGarmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    measurementProfile?: MeasurementProfileUpdateOneWithoutOrderItemsNestedInput
    photos?: OrderPhotoUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutGarmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    measurementProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: OrderPhotoUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutGarmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    measurementProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addOns?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PricingRuleUpdateWithoutGarmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    shop?: ShopUpdateOneRequiredWithoutPricingRulesNestedInput
  }

  export type PricingRuleUncheckedUpdateWithoutGarmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingRuleUncheckedUpdateManyWithoutGarmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    extraCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ShopCountOutputTypeDefaultArgs instead
     */
    export type ShopCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeasurementProfileCountOutputTypeDefaultArgs instead
     */
    export type MeasurementProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeasurementProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemCountOutputTypeDefaultArgs instead
     */
    export type OrderItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GarmentTypeCountOutputTypeDefaultArgs instead
     */
    export type GarmentTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GarmentTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopDefaultArgs instead
     */
    export type ShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeasurementProfileDefaultArgs instead
     */
    export type MeasurementProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeasurementProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeasurementVersionDefaultArgs instead
     */
    export type MeasurementVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeasurementVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderPhotoDefaultArgs instead
     */
    export type OrderPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderPhotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusLogDefaultArgs instead
     */
    export type StatusLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GarmentTypeDefaultArgs instead
     */
    export type GarmentTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GarmentTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PricingRuleDefaultArgs instead
     */
    export type PricingRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PricingRuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseDefaultArgs instead
     */
    export type ExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}