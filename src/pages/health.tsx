// health check URL
function Health() {}

// This gets called on every request
export async function getServerSideProps(context) {
  context.res.statusCode = 200;
  context.res.end('health page');
  return { props: {} };
}

export default Health;
