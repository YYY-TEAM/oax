import {Operation, Parameter} from 'swagger-schema-official';
import {IParameterExtended} from './IParameterExtended';

export interface IOperationExtended extends Operation {
  _id: number;
  _method: string;
  _pathName: string;
  _display?: boolean;
  _produces: string;
  parameters?: Parameter[] & IParameterExtended[];
}
