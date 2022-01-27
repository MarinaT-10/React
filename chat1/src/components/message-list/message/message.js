import styles from "./message.module.css";
import * as React from 'react';
import { Box, Rating, Typography } from '@mui/material';

export default function BasicRating() {
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Оценить</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

        </Box>
    );
}

export const Message = ({ message }) => {
    return (
        <div className={styles.messagebox}>
            <div className={styles.message}>
                <h4 className={styles.messageauthor}>Author: {message.author}</h4>
                <p className={styles.messagetext}>{message.message}</p>
            </div>
            <div><BasicRating /></div>

        </div>
    )
}