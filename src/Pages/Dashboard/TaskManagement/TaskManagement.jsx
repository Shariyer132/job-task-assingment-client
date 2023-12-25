import axios from "axios";
import TaskList from "./TaskList";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegSquarePlus } from "react-icons/fa6";
import { useForm } from "react-hook-form"


const TaskManagement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/tasks',{
      Name: data.name,
      Date: data.date,
      status: data.status
    })
    .then(res=>console.log(res.data))
   }


  const { data = [], refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/tasks');
      return res.data;
    }
  })
  const todoTasks = data.filter(task => task.status === 'TO DO')
  const onGoingTasks = data.filter(task => task.status === 'ON GOING')
  const completeTasks = data.filter(task => task.status === 'COMPLETE')

      // axios.post('http://localhost:5000/tasks')
      // .then(res => console.log(res.data))
  

  return (
    <div className="flex">
      <div className="w-60 bg-slate-300">
        <ul className="menu">
          <li>
            <NavLink className="text-black hover:text-white" to="/">
              <FaHome />
              Home</NavLink>
          </li>
          <li>
            <NavLink className="text-black hover:text-white" to="/TaskManagementHome">
              <GoProjectRoadmap></GoProjectRoadmap>
              Projects</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold pt-10 pl-10">Projects</h3>
          <FaRegSquarePlus onClick={() => document.getElementById('my_modal_1').showModal()} title="Create a new task" className="ml-5 mt-12 hover:cursor-pointer" />

          <dialog id="my_modal_1" className="modal">
            <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Name</span>
                </label>
                <input {...register("name", { required: true })} type="text" placeholder="task name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" {...register("date", { required: true })} className="input input-bordered" />
                {errors.date && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select {...register("status")} id="taskStatus" className="py-1">
                  <option value="TO DO" selected>TO DO</option>
                  <option value="ON GOING">ON GOING</option>
                  <option value="COMPLETE">COMPLETE</option>
                </select>
              </div>
              <p className="py-4"></p>
              <div>
                <input type="submit" value="Create" className="btn btn-block" />
              </div>
            </form>
          </dialog>


        </div>
        <div>
          {/* todo */}
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {
                todoTasks.map((task, idx) => <TaskList key={idx} refetch={refetch} task={task}></TaskList>)
              }
            </tbody>
          </table>
          {/* ongoning */}
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {
                onGoingTasks.map((task, idx) => <TaskList key={idx} refetch={refetch} task={task}></TaskList>)
              }
            </tbody>
          </table>
          {/* complete tasks */}
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {
                completeTasks.map((task, idx) => <TaskList key={idx} refetch={refetch} task={task}></TaskList>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;