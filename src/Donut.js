import React from "react";
import * as d3 from "d3";
import styled from "@emotion/styled";
import { colors } from "./util";

function createSegmentClass(name) {
  return `donut_group_${name}`;
}

class Donut extends React.Component {
  donut = React.createRef();
  activateElement = (d, name) => {
    const activeEl = d3.select(`.${name}`);
    activeEl.classed("active", true);
    this.props.activateElement(d.data.value.name);
  };

  deactivateElement = name => {
    const activeEl = d3.select(`.${name}`);
    activeEl.classed("active", false);
    this.props.deactivateElement();
  };

  componentDidMount() {
    const width = this.props.width;
    const height = this.props.width; // its square so we dont really need two props
    const margin = 35;

    const currentWeek = this.props.currentWeek;
    const currentWeekTotal = currentWeek.reduce(
      (acc, category) => category.value + acc,
      0
    );

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    const svg = d3
      .select(this.donut.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("class", "donut")
      .style("filter", "url(#drop-shadow)");

    const defs = svg.append("defs");

    const filter = defs
      .append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");

    filter
      .append("feDropShadow")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("stdDeviation", 15)
      .attr("flood-opacity", 0.3);

    var pie = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.value.value;
      });

    const segments = svg
      .selectAll(".donut")
      .data(pie(d3.entries(currentWeek)))
      .enter()
      .append("g")
      .attr("class", "segmentGroup")
      .attr(
        "class",
        d => `segmentGroup ${createSegmentClass(d.data.value.name)}`
      )
      .on("mouseover", d =>
        this.activateElement(d, createSegmentClass(d.data.value.name))
      )
      .on("mouseout", d =>
        this.deactivateElement(createSegmentClass(d.data.value.name))
      );

    // segments
    //   .append("path")
    //   .attr(
    //     "d",
    //     d3
    //       .arc()
    //       .innerRadius(140)
    //       .outerRadius(radius)
    //   )
    //   .attr("fill", function(d) {
    //     return colors[d.data.value.name];
    //   });

    const arc = d3
      .arc()
      .innerRadius(140)
      .outerRadius(radius);

    segments
      .append("path")
      .attr("fill", function(d) {
        return colors[d.data.value.name];
      })
      .transition()
      .delay(function(d, i) {
        return i * 500;
      })
      .duration(500)
      .attrTween("d", function(d) {
        var i = d3.interpolate(d.startAngle, d.endAngle);
        return function(t) {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    segments
      .append("text")
      .attr("transform", function(d) {
        const radius = (Math.min(width, height) / 2) * 0.73;
        return (
          "translate(" +
          d3
            .arc()
            .innerRadius(radius)
            .outerRadius(radius)
            .centroid(d) +
          ")"
        );
      })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .transition()
      .delay(function(d, i) {
        return i * 500;
      })
      .duration(500)
      .attrTween("opacity", () => d3.interpolate(0, 1))
      .text(function(d, i) {
        return `${((d.value / currentWeekTotal) * 100).toFixed()}%`;
      });
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    return <Container ref={this.donut} />;
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  svg {
    text {
      fill: white;
      font-size: 1.25rem;
      text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    }

    .segmentGroup {
      transition: transform 0.23s;
      will-change: transform;
      transform: scale(1);
    }

    .active {
      transform: scale(1.05);
    }
  }
`;

export default Donut;
