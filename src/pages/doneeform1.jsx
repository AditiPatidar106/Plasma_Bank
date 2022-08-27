import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

function DoneeForm1() {
  const [userList, setUserList] = useState([]);

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn-sm btn-success" onClick={handleClick}>
          Export to CSV
        </button>
      </div>
    );
  };

  const columns = [
    { dataField: "donorname", text: "Name", sort: true, filter: textFilter() },
    {
      dataField: "donorcontact",
      text: "Contact",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "donorcity", text: "City", sort: true, filter: textFilter() },
    {
      dataField: "donorstate",
      text: "State",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "donorpin", text: "PIN", sort: true, filter: textFilter() },
    { dataField: "donorage", text: "Age", sort: true, filter: textFilter() },
    {
      dataField: "donorgender",
      text: "Gender",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "donorbloodgroup",
      text: "Blood-Group",
      sort: true,
      filter: textFilter(),
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/doneeForm1")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ToolkitProvider
      bootstrap4
      keyField="donorname"
      data={userList}
      columns={columns}
      exportCSV
    >
      {(props) => (
        <>
          <MyExportCSV {...props.csvProps} />
          <BootstrapTable
            // bootstrap4
            // keyField='donorname'
            // columns={columns}
            // data={userList}
            pagination={pagination}
            filter={filterFactory()}
            {...props.baseProps}
            exportCSV
          />
        </>
      )}
      
    </ToolkitProvider>
   

    // <div>
    //     <table>
    //       <tr>
    // //           <th>Name</th>
    // <th>Email</th>
    // <th>Contact</th>
    // <th>City</th>
    // <th>State</th>
    // <th>PIN</th>
    // <th>Age</th>
    // <th>Gender</th>
    //           <th>Blood-Group</th>
    //       </tr>
    //       {
    //         userList && userList.length > 0 ?
    //         userList.map(usr =>
    //         <tr>
    //           <td>
    //             {usr.name}
    //           </td>
    //           <td>
    //             {usr.sugg}
    //           </td>
    //         </tr>
    //         )
    //         :'loading'
    //     }
    //   </table>
    // </div>
  );
}

export default DoneeForm1;
