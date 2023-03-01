import { useSelector } from 'react-redux'
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, TextField } from "@mui/material";
import * as React from 'react';
import CharacterIcon from '../Characters/characterIcon';

function RelationshipCellContent(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const character = props.character;
    const character2 = props.character2;
    const relationships = useSelector((state) => state.relationships.ships);
    const ships = relationships[character.id]
    let description = "";
    if (typeof ships !== 'undefined' && typeof ships[character2.id] !== 'undefined') {
        description = ships[character2.id].description;
    }
    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <CharacterIcon name={character.name} imageSrc={character.image} />

                        </Grid>
                        <Grid item>
                            <Typography>{"'s feelings towards"}</Typography>
                        </Grid>
                        <Grid item>
                            <CharacterIcon name={character2.name} imageSrc={character2.image} />
                        </Grid>

                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="ship-description"
                        label="Ship description"
                        fullWidth
                        variant="standard"
                        defaultValue={description}
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
            <Button variant="outlined" onClick={handleClickOpen}>
                <Typography>{description}</Typography>
            </Button>
        </>
    )


}
export default RelationshipCellContent;