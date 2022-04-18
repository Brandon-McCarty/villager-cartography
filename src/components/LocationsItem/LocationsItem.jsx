
// Display most beneficial information to user at a quick glance
function LocationsItem({location}) {
    return (
        <div>
            <div>{location.location_name} {location.x_coordinate}, {location.y_coordinate}, {location.z_coordinate} {location.explored_status ? 'Explored' : 'Unexplored'}</div>
        </div>
    )
}

export default LocationsItem;