export default function AppTitle(props) {
  const {
    title = 'GitHub User Info',
    subtitle = 'Search for any Github user profile',
  } = props;

  return (
    <div className="app-heading">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
