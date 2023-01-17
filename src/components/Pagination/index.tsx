import { Pagination as BootstrapPagination } from 'react-bootstrap';

interface PaginationProps {
  total?: number;
  size?: number;
  currentPage: number;
  onChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const total = props.total || 1;
  const size = props.size || 0;
  const totalPages = Math.ceil(total / size);
  return (
    <BootstrapPagination>
      {
        Array.from({ length: Math.ceil((props.total ?? 0) / (props.size ?? 1)) }).map((_, index) => (
          <BootstrapPagination.Item
            key={index}
            active={index === props.currentPage}
            onClick={() => props.onChange(index)}
          >
            {index + 1}
          </BootstrapPagination.Item>
        ))
      }
    </BootstrapPagination>
  );
}