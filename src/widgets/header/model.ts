/**
 * Модель сервисов в шапке
 * @todo вынести в публичный экспорт ui kit
 * @property {string} href - Ссылка сервиса
 * @property {string} icon - Иконка сервиса
 * @property {string} title - Загаловок сервиса
 * @property {boolean} isVisible - Флаг видимости сервиса
 * @property {string} [description] - не используется на макетах
 * @property {string} [group] - параметр необходимый для группирования сервисов
 */
export type Service = {
  /**
   * Ссылка сервиса
   * @type {string}
   */
  href: string
  /**
   * Иконка сервиса
   * @type {string}
   */
  icon: string
  /**
   * Загаловок сервиса
   * @type {string}
   */
  title: string
  /**
   * параметр необходимый для группирования сервисов
   * @type {string}
   * @optional
   */
  group?: string
  /**
   * Флаг видимости сервиса
   * @type {boolean}
   * @default false;
   */
  isVisible: boolean
  /**
   * не используется на макетах
   * @deprecated
   * @type {string}
   */
  description?: string
}
