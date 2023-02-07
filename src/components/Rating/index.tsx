import { StarFilled, StarOutlined } from '@ant-design/icons';

interface IRatingProps {
  rating?: number;
  total?: number;
}

export function Rating(props: IRatingProps) {
  const rating = Math.floor(props.rating ?? 0);
  const total = props.total ?? 5;
  const hasPartialStar = rating !== props.rating;
  let extra = total - rating - (hasPartialStar ? 1 : 0);
  if (extra < 0) {
    extra = 0;
  }

  console.log(rating, total, hasPartialStar, extra)

  return <div className={'d-flex'}>
    {[...Array(rating)].map((_, i) => (
      <StarFilled key={i} style={{ color: '#FFC107' }}/>
    ))}
    {hasPartialStar && <span style={{width: 8, overflow: 'hidden'}}><StarFilled key={rating} style={{ color: '#FFC107' }}/></span>}
    {[...Array(extra)].map((_, i) => (
      <StarOutlined key={rating + i} />
    ))}
  </div>
}