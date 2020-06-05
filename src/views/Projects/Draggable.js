import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { getStyle } from '@coreui/coreui-pro/dist/js/coreui-utilities.js'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './Draggable.css'
import defaultLayouts from './_layouts';
import { useParams } from 'react-router';

import { useAuth0 } from "../../react-auth0-spa";
import API from '../../api';

const breakPoints = {}
breakPoints.xl = parseInt(getStyle('--breakpoint-xl'), 10)
breakPoints.lg = parseInt(getStyle('--breakpoint-lg'), 10)
breakPoints.md = parseInt(getStyle('--breakpoint-md'), 10)
breakPoints.sm = parseInt(getStyle('--breakpoint-sm'), 10)
breakPoints.xs = parseInt(getStyle('--breakpoint-xs'), 10)

const ResponsiveGridLayout = WidthProvider(Responsive);

const Draggable = (props) => {
  const { getTokenSilently } = useAuth0();
  const [ layouts, setLayouts ] = useState(JSON.parse(localStorage.getItem('CoreUI-React-Draggable-Layouts') || JSON.stringify(defaultLayouts)));
  const [ project, setProject ] = useState({});
  const [ columns, setColumns ] = useState(0);
  const { id } = useParams();
  
  const loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;
  
  const updateProject = async () => {
    const token = await getTokenSilently();
    let projectInfo = await API.taiga.get('/projects/' + id, {
      headers: {'Authorization': 'Bearer ' + token}
    });
    setProject(projectInfo.data);
    if (projectInfo.data.us_statuses.lastItem.name === 'Archived' && projectInfo.data.us_statuses.lastItem.is_closed) {

      setColumns(projectInfo.data.us_statuses.length - 1);
    }
  };
  
  useEffect(() => {
    console.log("Redrawing");
    console.log(columns);
    console.log(project);
    if((Object.entries(project).length === 0 && project.constructor === Object) || project.id !== id) {
      console.log("Updating project");
      updateProject();
    }
  }, [id]);


  const resetLayout = () => {
    setLayouts(JSON.parse(JSON.stringify(defaultLayouts)));
  }

  const onLayoutChange = (layout, layouts) => {
    localStorage.setItem('CoreUI-React-Draggable-Layouts', JSON.stringify(layouts))
    setLayouts(layouts);
  }

  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'

  if (Object.entries(project).length === 0 || columns === 0) {
    return loading();
  }
  return (
    <div className="animated fadeIn">
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
      <ResponsiveGridLayout className="layout" layouts={layouts}
                            onLayoutChange={(layout, layouts) =>
                              onLayoutChange(layout, layouts)
                            }
                            breakpoints={breakPoints}
                            cols={{xl: columns, lg: columns, md: columns, sm: columns, xs: columns}}
                            isResizable={false}
                            measureBeforeMount={false}
                            draggableHandle={".card-header"}>
        <Card key="a" className="card-accent-primary">
          <CardHeader>
            <i className="cui-layers"></i>
            Static Card 1
            <div className="card-header-actions">
              <Button color="link" size="sm" className="card-header-action" onClick={() => resetLayout()}>Reset Layout</Button>
            </div>
          </CardHeader>
          <CardBody>
            {loremIpsum}
          </CardBody>
        </Card>
        <Card key="b" className="card-accent-secondary">
          <CardHeader>
            <i className="cui-cursor-move"></i>
            Drag & Drop Card 2 <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          </CardHeader>
          <CardBody>
            {loremIpsum}
          </CardBody>
        </Card>
        <Card key="c" className="card-accent-success">
          <CardHeader>
            <i className="cui-cursor-move"></i>
            Drag & Drop Card 3 <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          </CardHeader>
          <CardBody>
            {loremIpsum}
          </CardBody>
        </Card>
        <Card key="d" className="card-accent-info">
          <CardHeader>
            <i className="cui-cursor-move"></i>
            Drag & Drop Card 4 <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          </CardHeader>
          <CardBody>
            {loremIpsum}
          </CardBody>
        </Card>
        <Card key="e" className="card-accent-warning">
          <CardHeader>
            <i className="cui-cursor-move"></i>
            Drag & Drop Card 5 <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          </CardHeader>
          <CardBody>
            {loremIpsum}
          </CardBody>
        </Card>
        <Card key="f" className="card-accent-danger">
          <CardHeader>
            <i className="cui-cursor-move"></i>
            Drag & Drop Card 6 <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          </CardHeader>
          <CardBody>
            {loremIpsum}
          </CardBody>
        </Card>
      </ResponsiveGridLayout>
    </div>
  )
}

export default Draggable
