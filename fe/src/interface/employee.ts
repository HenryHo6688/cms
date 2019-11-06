/*
import { department } from '../constants/options';
 * @Author: your name
 * @Date: 2019-10-23 20:50:49
 * @LastEditTime: 2019-11-04 16:52:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-redux/src/interface/employee.ts
 */
export interface EmployeeInfo {
    id: number;
    title: string;
    content: string;
    pv: number;
    author: string;
    createdAt: Date;
}

export interface EmployeeRequest {
    title?: string;
    departmentId?: number;
}

export type EmployeeResponse = EmployeeInfo[] | undefined

export interface CreateRequest {
    name: string;
    departmentId: number;
    hiredate: string;
    levelId: number;
}

export interface CreateBlogRequest {
    title: string;
    author: string;
    content: any;
}

export interface UpdateRequest {
    id: number;
    name: string;
    departmentId: number;
    hiredate: string;
    levelId: number;
}

export interface DeleteRequest {
    id: number;
}