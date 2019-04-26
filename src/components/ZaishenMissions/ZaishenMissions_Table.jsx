import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const tableData = [
    { mission: 'Unwaking Waters', day: 1 },
    { mission: 'Chahbek Village', day: 2 },
    { mission: 'Aurora Glade', day: 3 },
    { mission: 'A Time for Heroes', day: 4 },
    { mission: 'Consulate Docks', day: 5},
    { mission: 'Ring of Fire', day: 6 },
    { mission: 'Nahpui Quarter', day: 7 },
    { mission: "Dragon's Lair, The", day: 8 },
    { mission: 'Dzagonur Bastion', day: 9 },
    { mission: "D'Alessio Seaboard", day: 10 },
    { mission: 'Assault on the Stronghold', day: 11 },
    { mission: 'Eternal Grove, The', day: 12 },
    { mission: 'Sanctum Cay', day: 13 },
    { mission: 'Rilohn Refuge', day: 14 },
    { mission: 'Warband of Brothers', day: 15 },
    { mission: 'Borlis Pass', day: 16 },
    { mission: 'Imperial Sanctum', day: 17 },
    { mission: 'Moddok Crevice', day: 18 },
    { mission: 'Nolani Academy', day: 19 },
    { mission: "Destruction's Depths", day: 20 },
    { mission: 'Venta Cemetery', day: 21 },
    { mission: 'Fort Ranik', day: 22 },
    { mission: 'A Gate Too Far', day: 23 },
    { mission: "Minister Cho's Estate", day: 24 },
    { mission: 'Thunderhead Keep', day: 25 },
    { mission: 'Tihark Orchard', day: 26 },
    { mission: 'Finding the Bloodstone', day: 27 },
    { mission: 'Dunes of Despair', day: 28 },
    { mission: 'Vizunah Square', day: 29 },
    { mission: 'Jokanur Diggings', day: 30 },
    { mission: 'Iron Mines of Moladune', day: 31 },
    { mission: 'Kodonur Crossroads', day: 32 },
    { mission: 'G.O.L.E.M.', day: 33 },
    { mission: 'Arborstone', day: 34 },
    { mission: 'Gates of Kryta', day: 35 },
    { mission: 'Gate of Madness', day: 36 },
    { mission: 'Elusive Golemancer, The', day: 37 },
    { mission: 'Riverside Province', day: 38 },
    { mission: 'Boreas Seabed', day: 39 },
    { mission: 'Ruins of Morah', day: 40 },
    { mission: "Hell's Precipice", day: 41 },
    { mission: 'Ruins of Surmia', day: 42 },
    { mission: 'Curse of the Nornbear', day: 43 },
    { mission: 'Sunjiang District', day: 44 },
    { mission: 'Elona Reach', day: 45 },
    { mission: 'Gate of Pain', day: 46 },
    { mission: 'Blood Washes Blood', day: 47 },
    { mission: 'Bloodstone Fen', day: 48 },
    { mission: "Jennur's Horde", day: 49 },
    { mission: 'Gyala Hatchery', day: 50 },
    { mission: "Abaddon's Gate", day: 51 },
    { mission: 'Frost Gate, The', day: 52 },
    { mission: 'Augury Rock', day: 53 },
    { mission: 'Grand Court of Sebelkeh', day: 54 },
    { mission: 'Ice Caves of Sorrow', day: 55 },
    { mission: 'Raisu Palace', day: 56 },
    { mission: 'Gate of Desolation', day: 57 },
    { mission: 'Thirsty River', day: 58 },
    { mission: 'Blacktide Den', day: 59 },
    { mission: 'Against the Charr', day: 60 },
    { mission: "Abaddon's Mouth", day: 61 },
    { mission: 'Nundu Bay', day: 62 },
    { mission: 'Divinity Coast', day: 63 },
    { mission: 'Zen Daijun', day: 64 },
    { mission: 'Pogahn Passage', day: 65 },
    { mission: 'Tahnnakai Temple', day: 66 },
    { mission: 'Great Northern Wall, The', day: 67 },
    { mission: 'Dasha Vestibule', day: 68 },
    { mission: 'Wilds, The', day: 69 }
]

export default class ZaishenMissions_Table extends Component{
    state = {
        column: null,
        data: tableData,
        direction: null,
    }

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'day' ? direction : null}
                            onClick={this.handleSort('day')}
                        >
                            Day
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'mission' ? direction : null}
                            onClick={this.handleSort('mission')}
                        >
                            Mission
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ day, mission }) => (
                        <Table.Row key={mission}>
                            <Table.Cell>{day}</Table.Cell>
                            <Table.Cell>{mission}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}