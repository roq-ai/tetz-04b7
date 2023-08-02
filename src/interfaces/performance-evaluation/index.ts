import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  date: any;
  score: number;
  user_id: string;
  teamlead_id: string;
  created_at?: any;
  updated_at?: any;

  user_performance_evaluation_user_idTouser?: UserInterface;
  user_performance_evaluation_teamlead_idTouser?: UserInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  teamlead_id?: string;
}
