import React, {useState, useContext} from 'react'
import NotyfContext from '../context/NotyfContext'
import { API, graphqlOperation } from 'aws-amplify'
import { createGroup } from '../graphql/mutations'

// TODO: dodawanie i wyciaganie przez graphqla, rollowanie, potwierdzanie usuniecia, otwarcie grupy

const Home: React.FC = () => {
  const initialGroupsState = [
    {
      id: "1",
      name: "Grupa 1",
      entries: ["przemek", "justyna", "janek"]
    },
    {
      id: "2",
      name: "Grupa 2",
      entries: ["slawek", "ola", "felix"]
    },
    {
      id: "3",
      name: "Grupa 3",
      entries: ["malwina", "filip"]
    }
  ]

  const [groups, setGroups] = useState(initialGroupsState)
  const [groupName, setGroupName] = useState('')
  const [groupSelected, setGroupSelected] = useState('')

  const [entryName, setEntryName] = useState('')

  const notyf = useContext(NotyfContext)

  const createGroupHandle = async () => {
    if(groupName !== '' && groupName!==null && groupName!==undefined) {
      //graphql call 
      // try {
      //   await API.graphql(graphqlOperation(createGroup, { input: input }))
      //   setName(newName)

      //   notyf.success('Updated file successfully')
      // } catch (e) {
      //   notyf.error("Couldn't update a file.")
      // }
      let response;
      if(response) { 
        notyf.success("Successfully created a group.")
        setGroupName('')
        
      } else {
        notyf.error("Couldn't create a group, check your internet connection.")
      }
    }
  } 

  const handleGroupChange = (e:any) => {
    setGroupName(e.target.value)
  }

  // set entry name in jsx

  const addEntryHandle = (e:any) => {
    //dodawanie entry do grupy
    // API.addEntry(entryName, belongsTo: grupa 3)
    let response = true;
    if(entryName !== '' && entryName!==null && entryName!==undefined) {
      // groupSelected <- id wybranej grupy
      notyf.success("Successfully added an entry.")
      setEntryName('')

    }
  }
  const deleteGroup = (e:any) => {
    console.log(e.target.name) // id usuwanej grupy
  }
  
  return (
    <div className="mediumShadow text-white text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-lg w-full bg-navyDark mt-6 font-mono text-md p-8">
      <div className="text-4xl w-full text-center mb-6">
        Hi, user.
      </div>
      {/* <img className="md:w-80 w-full m-auto" src={me} alt="my picture :)" /> */}
      <div className="py-4 ">
       <input type="text" placeholder="Group name" onChange={handleGroupChange} value={groupName} className="cursor-pointer py-2 text-black pl-2 mr-2 focus:outline focus:outline-2 focus:outline-skyish"/>
        <input onClick={createGroupHandle} type="button" className="px-3 py-2 transition-colors bg-white text-black hover:text-white hover:bg-blue-900 cursor-pointer" value="Click to create group"/>
      </div>
      <div className="py-4">
        <select name="group select" onChange={e => setGroupSelected(e.target.value)} className="text-black py-2 mr-2 px-2">
          {groups.map(data => {
            return(
         <option value={data.id}>{data.name}</option>
            )
          })}
        </select>
       <input type="text" placeholder="name" onChange={(e) =>setEntryName(e.target.value)} value={entryName} className="cursor-pointer py-2  text-black pl-2 "/>
       <input type="button" onClick={addEntryHandle} value="Add to group" className='py-2 ml-2 px-2 cursor-pointer  transition-colors bg-white text-black hover:text-white hover:bg-green-900' />
     </div>
     <div className="py-4">
       <div>
       <div className='grid grid-cols-4 pb-2 border-b'><div>ID</div><div>Group name</div><div>Group size</div><div>Action</div></div>
        
         {groups.map((data) => {
             return <div className='grid grid-cols-4 border-b mt-4'><div>{data.id}</div><div>{data.name}</div><div>{data.entries.length}</div><div><input type="button" value="Roll" className='py-2 ml-2 pl-2 cursor-pointer transition-colors text-white hover:text-green-900' />        <input type="button" value="Open" className='py-2 ml-2 pl-2 cursor-pointer transition-colors text-white hover:text-blue-900' />
             <input onClick={deleteGroup} name={data.id} type="button" value="Delete" className='py-2 ml-2 pl-2 cursor-pointer transition-colors text-white hover:text-red-800' />
             </div>
           </div>
         })}
         </div>
     </div>
    </div>
  )
}

export default Home
