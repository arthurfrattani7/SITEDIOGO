export class EmailContent {
  constructor(
    public readonly html: string,
    public readonly subject: string,
    public readonly to: string[],
  ) {}
}