import { createContext, useState } from 'react'


const FamilyContext = createContext()

export const FamilyProvider = ({ children }) => {
  const [members, setMembers] = useState([])

  const getFamilyMembers = () => {
    const existingMembers = JSON.parse(localStorage.getItem('members')) || []
    setMembers(existingMembers)
  }

  const deleteFamilyMember = (memberId) => {
    alert("confirm deletion")
    const existingMembers = JSON.parse(localStorage.getItem('members')) || []
    const updatedMembers = existingMembers.filter(
      (member) => member.id !== memberId
    )
    localStorage.setItem('members', JSON.stringify(updatedMembers))
  }

  return (
    <FamilyContext.Provider
      value={{ members, getFamilyMembers, deleteFamilyMember }}>
      {children}
    </FamilyContext.Provider>
  )
}

export default FamilyContext
