
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const HomePage = () => {
  return (
    <h1>welcome!</h1>
  )
}


export default HomePage