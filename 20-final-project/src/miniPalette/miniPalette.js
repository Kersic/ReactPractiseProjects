import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./miniPaletteStyles";

function MiniPalette({ classes, palette, goToPalette }) {
  return (
    <div
      className={classes.miniPalette}
      onClick={() => goToPalette(palette.id)}
    >
      <div className={classes.colors}>
        {palette.colors.map(color => (
          <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
          />
        ))}
      </div>
      <div className={classes.title}>
        {palette.paletteName}
        <span className={classes.emoji}>{palette.emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);