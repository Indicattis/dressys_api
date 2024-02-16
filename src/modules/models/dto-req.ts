export interface ReqDTO {
  id?: number;
  req_date: any;
  req_services: string;
  req_duration: number;
  req_price: number;
  req_status?: boolean;
  req_client: string;
  req_colab?: string;
}