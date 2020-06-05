import React, { useState, useEffect } from 'react';

import Board from '@lourenci/react-kanban'
import { useParams } from 'react-router';
import { useAuth0 } from '../../react-auth0-spa';
import API from '../../api';

const Project = (props) => {
    const { getTokenSilently } = useAuth0();
    
    const { id } = useParams();
    const [ project, setProject ] = useState({});
    
    const loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;
    
    const board = {
        lanes: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
        {
          id: 1,
          title: 'Card title 1',
          description: 'Card content'
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content'
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content'
        }
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content'
        }
      ]
    },
    {
      id: 3,
      title: 'Q&A',
      cards: [
        {
          id: 10,
          title: 'Card title 10',
          description: 'Card content'
        },
        {
          id: 11,
          title: 'Card title 11',
          description: 'Card content'
        }
      ]
    },
    {
      id: 4,
      title: 'Production',
      cards: [
        {
          id: 12,
          title: 'Card title 12',
          description: 'Card content'
        },
        {
          id: 13,
          title: 'Card title 13',
          description: 'Card content'
        }
      ]
    }
  ]
}
    
    const updateProject = async () => {
        const token = await getTokenSilently();
        let projectInfo = await API.taiga.get('/projects/' + id, {
            headers: {'Authorization': 'Bearer ' + token}
        });
        setProject(projectInfo.data);
    };
    
    useEffect(() => {
        if((Object.entries(project).length === 0 && project.constructor === Object) || project.id !== id) {
            console.log("Updating project");
            updateProject();
        }
    }, [id]);
    
    if (Object.entries(project).length === 0 || columns === 0) {
        return loading();
    }
}