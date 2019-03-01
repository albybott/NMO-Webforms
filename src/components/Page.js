import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Row, Col } from "react-flexbox-grid";
import Typography from "@material-ui/core/Typography";
import "../css/style.styl";

class Page extends React.Component {
  render() {
    const { title, children, showHeader = true } = this.props;
    return (
      <>
        {showHeader && <Header />}
        <Grid
          style={showHeader ? { marginTop: "94px" } : { marginTop: "1rem" }}
        >
          <Row>
            <Col xs={12}>
              {title ? (
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
                  {title}
                </Typography>
              ) : null}
              {children}
              <Footer />
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}

export default Page;
