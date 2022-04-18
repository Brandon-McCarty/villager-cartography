

function WorldItem({world}) {
  return (
    <div>
        <li>{world.world_name}</li>
        <button>DELETE</button>
    </div>
  )
}

export default WorldItem;