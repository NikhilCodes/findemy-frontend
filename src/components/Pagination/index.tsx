import React from 'react';
import { Pagination as AntdPagination } from 'antd';

interface PaginationProps {
  total?: number;
  size?: number;
  currentPage: number;
  onChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const total = props.total || 1;
  const size = props.size || 0;
  return (
    <AntdPagination total={total} current={props.currentPage} pageSize={size} onChange={(page) => {
      props.onChange(page);
    }} />
  );
}