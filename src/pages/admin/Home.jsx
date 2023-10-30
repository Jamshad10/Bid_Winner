import Header from '../../components/admin/Header';
import JobDetails from '../../components/admin/JobDetails';
import ProjectTable from '../../components/admin/ProjectTable';
import SideBar from '../../components/admin/SideBar';
import Table from '../../components/admin/Table';

const Home = () => {

  return (
    <div className='bg-slate-100'>
      <Header />

      <div className='flex flex-col lg:flex-row md:flex-row xl:flex-row'>
        <div >
          <SideBar />
        </div>
        <div>
          <Table />
        </div>
        <div className='lg:px-8'>
          <div className='flex flex-col'>
            <JobDetails />
            <ProjectTable />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;