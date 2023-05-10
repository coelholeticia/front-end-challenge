import { useState, useEffect } from 'react'

const Repositorios = () => {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')
  const [filteredRepos, setFilteredRepos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/coelholeticia/repos')
      const data = await response.json()

      setRepos(data)
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
  }, [repos, search])

  return(
    <>
      <div className='repositorios-git'>
        <input className='Inpu-repo' 
          placeholder="Procure um repositório 🔎"
          onChange={handleSearch}
        />
        <div className='lista-repo'>
          <ul className='lista-repo'>
            {filteredRepos.map(repo => {
              return(
                <li className='repositorios-itens' key={repo.id}>
                  {repo.name}
                  <a className='link-repo'  href={repo.html_url} target="_blank" >Ver mais</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Repositorios