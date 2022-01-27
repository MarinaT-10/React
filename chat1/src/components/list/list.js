import * as React from 'react';
import {List, ListItem, ListItemText, IconButton} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import styles from "./list.module.css";

export default function GutterlessList() {
  return (
    <List sx={{ width: '100%', maxWidth: 400, }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <ListItem sx={{ width: '100%', borderBottom: "1px solid #606267" }}
          key={value}
          disableGutters
          secondaryAction={
            <IconButton>
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Чат ${value}`} />
        </ListItem>
      ))}
    </List>
  );
}
export const MyList = () => {
    return (
        <div className={styles.mylist}>
        <h4 className={styles.title}>Список чатов</h4>
        <div className={styles.listitem}><GutterlessList /></div>
      </div>
    )
}