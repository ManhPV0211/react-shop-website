function Orders() {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="alert-success">
                        <td><a href="/" className="link">1</a></td>
                        <td>Paid</td>
                        <td>Jan 29 2023</td>
                        <td>$99</td>
                    </tr>

                    <tr className="alert-danger">
                        <td><a href="/" className="link">2</a></td>
                        <td>Paid</td>
                        <td>Jan 29 2023</td>
                        <td>$99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Orders;