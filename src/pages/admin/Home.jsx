import Header from '../../components/admin/Header';
import SideBar from '../../components/admin/SideBar';
import Table from '../../components/admin/Table';

const Home = () => {

  return (
    <>
      <Header />
      <div className='flex'>
        <div >
          <SideBar />
        </div>
        <div>
          <Table />
        </div>
      </div>

    </>
  )
}

export default Home;