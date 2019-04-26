import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import LinkButton from './LinkButton';

const tableData = [
    { hero: 'Acolyte Jin', profession: 'Ranger', position: 'Midline', occupation: 'DPS', team: '', buildPrimary: '[R_Me BHA Ranger;OgUTc18KUyVKHoCUx4L8xA2QAA]', buildAlternative: '' },
    { hero: 'Anton', profession: 'Assassin', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:A/any_Dagger_Spammer_Hero' displayText='A/any Dagger Spammer Hero' />, buildAlternative: '' },
    { hero: 'Dunkoro', profession: 'Monk', position: 'Backline', occupation: 'Heal', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Mo/Me_Healing_Burst_Hero' displayText='Mo/Me Healing Burst Hero' />, buildAlternative: '' },
    { hero: 'General Morgahn', profession: 'Paragon', position: 'Midline', occupation: 'Support', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:P/any_Command_Hero' displayText='P/any Command Hero' />, buildAlternative: '' },
    { hero: 'Goren', profession: 'Warrior', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:W/any_Hundred_Blades_Hero' displayText='W/any Hundred Blades Hero' />, buildAlternative: '' },
    { hero: 'Gwen', profession: 'Mesmer', position: 'Midline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Me/any_Domination_Hero' displayText='Me/any Domination Hero' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:Me/any_Psychic_Instability_Hero' displayText='Me/any Psychic Instability Hero' /> },
    { hero: 'Hayda', profession: 'Paragon', position: 'Midline', occupation: 'Support', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:P/any_Command_Hero' displayText='P/any Command Hero' />, buildAlternative: '' },
    { hero: 'Jora', profession: 'Warrior', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:W/any_Hundred_Blades_Hero' displayText='W/any Hundred Blades Hero' />, buildAlternative: '' },
    { hero: 'Kahmu', profession: 'Dervish', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/any_VoS_Dervish_Hero' displayText='D/any VoS Dervish Hero' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/A_Wounding_Strike_Hero' displayText='D/A Wounding Strike Hero' /> },
    { hero: 'Keiran Thackeray', profession: 'Paragon', position: 'Midline', occupation: 'Support', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:P/any_Command_Hero' displayText='P/any Command Hero' />, buildAlternative: '' },
    { hero: 'Koss', profession: 'Warrior', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:W/any_Hundred_Blades_Hero' displayText='W/any Hundred Blades Hero' />, buildAlternative: '' },
    { hero: 'Livia', profession: 'Necromancer', position: 'Midline', occupation: 'DPS', team: <LinkButton href='https://gwpvx.gamepedia.com/Build:Team_-_2_Hero_Jagged_Bombers' displayText='Team - 2 Hero Jagged Bombers' />, buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:N/any_Minion_Bomber' displayText='N/any Minion Bomber' />, buildAlternative: '' },
    { hero: 'M.O.X.', profession: 'Dervish', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/any_VoS_Dervish_Hero' displayText='D/any VoS Dervish Hero' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/A_Wounding_Strike_Hero' displayText='D/A Wounding Strike Hero' /> },
    { hero: 'Master of Whispers', profession: 'Necromancer', position: 'Midline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:N/any_Physical_Curses_Support' displayText='N/any Physical Curses Support' />, buildAlternative: '' },
    { hero: 'Melonni', profession: 'Dervish', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/any_VoS_Dervish_Hero' displayText='D/any VoS Dervish Hero' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:D/A_Wounding_Strike_Hero' displayText='D/A Wounding Strike Hero' /> },
    { hero: 'Miku', profession: 'Assassin', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:A/any_Dagger_Spammer_Hero' displayText='A/any Dagger Spammer Hero' />, buildAlternative: '' },
    { hero: 'Norgu', profession: 'Mesmer', position: 'Midline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Me/any_Illusion_Magic_Hero' displayText='Me/any Illusion Magic Hero' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:Me/any_Lyssa%27s_Aura_Hero' displayText="Me/any Lyssa's Aura Hero" /> },
    { hero: 'Olias', profession: 'Necromancer', position: 'Midline', occupation: 'DPS', team: <LinkButton href='https://gwpvx.gamepedia.com/Build:Team_-_2_Hero_Jagged_Bombers' displayText='Team - 2 Hero Jagged Bombers' />, buildPrimary: '', buildAlternative: '' },
    { hero: 'Razah', profession: 'Mesmer', position: 'Midline', occupation: 'Heal', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Me/Rt_PI_Resto_Hero' displayText='Me/Rt PI Resto Hero' />, buildAlternative: <LinkButton href='https://gwpvx.gamepedia.com/Build:Me/N_Keystone_Minion_Bomber_Hero' displayText='Me/N Keystone Minion Bomber Hero' /> },
    { hero: 'Tahlkora', profession: 'Monk', position: 'Backline', occupation: 'Heal', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Mo/Me_UA_Healer_Hero' displayText='Mo/Me UA Healer Hero' />, buildAlternative: '' },
    { hero: 'Xandra', profession: 'Ritualist', position: 'Midline', occupation: 'DPS', team: <LinkButton href='https://gwpvx.gamepedia.com/Build:Team_-_2_Hero_Jagged_Bombers' displayText='Team - 2 Hero Jagged Bombers' />, buildPrimary: '', buildAlternative: '' },
    { hero: 'Zei Ri', profession: 'Ritualist', position: 'Backline', occupation: 'Support', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:Rt/any_Soul_Twisting_Ritualist' displayText='Rt/any Soul Twisting Ritualist' />, buildAlternative: '' },
    { hero: 'Zenmai', profession: 'Assassin', position: 'Frontline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:A/any_Dagger_Spammer_Hero' displayText='A/any Dagger Spammer Hero' />, buildAlternative: '' },
    { hero: 'Zhed Shadowhoof', profession: 'Elementalist', position: 'Midline', occupation: 'DPS', team: '', buildPrimary: <LinkButton href='https://gwpvx.gamepedia.com/Build:E/any_EA_Fire_Nuker' displayText='E/any EA Fire Nuker' />, buildAlternative: '' },
]

export default class HeroesTable extends Component {
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
                            sorted={column === 'hero' ? direction : null}
                            onClick={this.handleSort('hero')}
                        >
                            Hero
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'profession' ? direction : null}
                            onClick={this.handleSort('profession')}
                        >
                            Profession
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'position' ? direction : null}
                            onClick={this.handleSort('position')}
                        >
                            Position
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'occupation' ? direction : null}
                            onClick={this.handleSort('occupation')}
                        >
                            Occupation
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'team' ? direction : null}
                            onClick={this.handleSort('team')}
                        >
                            Team
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Build #1
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Build #2
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ buildAlternative, profession, team, buildPrimary, position, occupation, hero }) => (
                        <Table.Row key={hero}>
                            <Table.Cell>{hero}</Table.Cell>
                            <Table.Cell>{profession}</Table.Cell>
                            <Table.Cell>{position}</Table.Cell>
                            <Table.Cell>{occupation}</Table.Cell>
                            <Table.Cell>{team}</Table.Cell>
                            <Table.Cell>{buildPrimary}</Table.Cell>
                            <Table.Cell>{buildAlternative}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}