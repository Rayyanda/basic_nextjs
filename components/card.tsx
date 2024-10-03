export default function Card(props:any)
{
    return (
        <div className="card shadow">
            <div className="card-header">
                <h5>Ini card Header</h5>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
            </div>
            <div className="card-footer">
                <h5>Ini card footer</h5>
            </div>
        </div>
    )
}