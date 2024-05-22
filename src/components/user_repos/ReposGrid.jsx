import ReposCard from './ReposCard';

const ReposGrid = ({ showData }) => {
  return (
    <div className="flex">
      {showData.map(data => (
        <ReposCard
          key={data.id}
          name={data.name}
          description={data.description ? data.description : ''}
          image={
            data.owner.avatar_url ? data.owner.avatar_url : '/not_found.png'
          }
          createdAt={data.created_at.slice(0, 10)}
        />
      ))}
    </div>
  );
};

export default ReposGrid;
