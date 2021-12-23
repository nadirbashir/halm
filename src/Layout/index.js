const Layout = (props) => {
  return (
    <div class="container-fluid">
      {/* <div class="row align-items-start">
        <div class="col">One of three columns</div>
        <div class="col">One of three columns</div>
        <div class="col">One of three columns</div>
      </div> */}
        {props.children}
    </div>
  );
};

export default Layout;
