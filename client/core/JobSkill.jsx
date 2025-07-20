export default function JobSkill() {
  const jobs = [
    { name: 'warrior', skills: ['flash blade', 'beam blade', 'rush'] },
    { name: 'magician', skills: ['starry flow', 'boom', 'empowered ray'] },
    { name: 'bowman', skills: ['double jump', 'wind arrow', 'phoenix'] },
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Classes & Jobs</h1>

      <p>Each class has their own story to tell</p>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {jobs.map((job, index) => (
          <li key={index} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
            <strong>{job.name}</strong>: {
              job.skills.join(', ')
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
