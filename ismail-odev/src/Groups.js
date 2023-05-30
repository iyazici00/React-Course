import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Groups extends Component {
    state = {
        groups: [],
    }
    componentDidMount() {
        this.getGroups()
    }
    getGroups = () => {
        fetch('http://localhost:3000/groups')
            .then((response) => response.json())
            .then((data) => this.setState({ groups: data }))
    }

    render() {
        return (
            <>
                <h1>Titles</h1>
                <hr />
                <ListGroup>
                    {this.state.groups.map((group) => (
                        <ListGroupItem
                            onClick={() => this.props.changeGroup(group)}
                            key={group.id}

                        >
                            <p className='groupname'>{group.groupName}</p>
                        </ListGroupItem>
                    ))}
                </ListGroup>

            </>
        )
    }
}