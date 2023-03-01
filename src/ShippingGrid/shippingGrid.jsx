import { Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import CharacterIcon from "../Characters/characterIcon";
import RelationshipCellContent from "../Relationships/relationshipCellContent";
import React from 'react'
import { useSelector } from 'react-redux'
function ShippingGrid() {
    const characters = useSelector((state) => state.characterList.characters);
    const cols = characters.map(character => {
        return (
            <TableCell key={character.name}>
                <CharacterIcon name={character.name} imageSrc={character.image} />
            </TableCell>
        )
    })

    const rows = characters.map((character) => {
        const relationshipCells = characters.map((character2) => {
            return <TableCell key={`${character2.name}-${character.name}-cell`}><RelationshipCellContent character={character} character2={character2}/></TableCell>
        })
        return (
            <TableRow
                key={`${character.name}-row`}
            >
                <TableCell scope="row">
                    <CharacterIcon name={character.name} imageSrc={character.image} />
                </TableCell>
                {relationshipCells}
            </TableRow>
        )

    })

    return <Table>
        <TableHead>
            <TableRow>
                <TableCell>{"<3"}</TableCell>
                {cols}
            </TableRow>
        </TableHead>
        <TableBody>
            {rows}
        </TableBody>
    </Table>

}

export default ShippingGrid;