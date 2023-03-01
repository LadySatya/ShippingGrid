import { Avatar, Box, Typography, Grid } from "@mui/material";

function CharacterIcon(props) {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item >
                <Box display="flex">
                    <Avatar
                        alt={props.name}
                        src={props.imageSrc}
                        sx={{ width: 56, height: 56 }}
                    />
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="caption" align="center">
                    {props.name}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CharacterIcon;