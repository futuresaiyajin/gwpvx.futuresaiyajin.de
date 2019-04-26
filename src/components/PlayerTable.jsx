import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import LinkButton from './LinkButton';
import GWBBCode from './GWBBCode';

const tableData = [
    { profession: 'Assassin', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:A/any_PvE_Dagger_Spammer' displayText='A/any PvE Dagger Spammer' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:A/any_PvE_Master_Of_Knockdown' displayText='A/any PvE Master Of Knockdown' />, buildAlternative2: <LinkButton href='https://gwpvx.gamepedia.com/Build:A/D_Vow_of_Strength' displayText='A/D Vow of Strength' /> },
    { profession: 'Dervish', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/any_Pious_Teardowns' displayText='D/any Pious Teardowns' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/any_Vow_of_Strength' displayText='D/any Vow of Strength' />, buildAlternative2: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/W_PvE_Onslaught_Dervish' displayText='D/W PvE Onslaught Dervish' /> },
    { profession: 'Elementalist', buildPrimary: '', buildAlternative: '', buildAlternative2: '' },
    { profession: 'Mesmer', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Me/any_PvE_E-Surge_Mesmer' displayText='Me/any PvE E-Surge Mesmer' />, buildAlternative: '', buildAlternative2: '' },
    { profession: 'Monk', buildPrimary: <GWBBCode gwTemplateCode='ADIRjh8oRyI5EQCd1e8RkJA' />, buildAlternative: <GWBBCode gwTemplateCode='ADIRjh8oRyI5EQCd1e8RkJA' />, buildAlternative2: '' },
    { profession: 'Necromancer', buildPrimary: '', buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:N/any_OoU_Minion_Master' displayText='N/any OoU Minion Master' />, buildAlternative2: '' },
    { profession: 'Paragon', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:P/W_Imbagon' displayText='P/W Imbagon' />, buildAlternative: '', buildAlternative2: '' },
    { profession: 'Ranger', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:R/W_PvE_Earth_Shaker_Tank' displayText='R/W PvE Earth Shaker Tank' />, buildAlternative: '', buildAlternative2: '' },
    { profession: 'Ritualist', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Rt/any_Spirit_Spammer' displayText='Rt/any Spirit Spammer' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:Rt/any_Destructive_Was_Glaive_Bomber' displayText='Rt/any Destructive Was Glaive Bomber' />, buildAlternative2: '' },
    { profession: 'Warrior', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:W/any_Dragon_Slash_Warrior' displayText='W/any Dragon Slash Warrior' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:W/any_PvE_Hundred_Blades_Warrior' displayText='W/any PvE Hundred Blades Warrior' />, buildAlternative2: <LinkButton href='https://gwpvx.gamepedia.com/Build:W/D_Enduring_Scythe' displayText='W/D Enduring Scythe' /> },
]

export default class PlayerTable extends Component {
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
                            sorted={column === 'profession' ? direction : null}
                            onClick={this.handleSort('profession')}
                        >
                            Profession
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Build #1
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Build #2
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Build #3
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ buildAlternative, buildAlternative2, profession, buildPrimary }) => (
                        <Table.Row key={profession}>
                            <Table.Cell>{profession}</Table.Cell>
                            <Table.Cell>{buildPrimary}</Table.Cell>
                            <Table.Cell>{buildAlternative}</Table.Cell>
                            <Table.Cell>{buildAlternative2}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}