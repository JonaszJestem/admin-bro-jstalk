export const CustomerSalutation = {
  MR: 'MR',
  MRS: 'MRS',
  NEUTRAL: 'NEUTRAL',
} as const;

export type CustomerSalutationType = typeof CustomerSalutation[keyof typeof CustomerSalutation];

export const CustomerCivilStatus = {
  MARRIED: 'MARRIED',
  SINGLE: 'SINGLE',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED',
} as const;

export type CustomerCivilStatusType = typeof CustomerCivilStatus[keyof typeof CustomerCivilStatus];
