// function which appends state in url
export const changeUrlState = (g, y, t) => {
  const url = `goal=${g}&year=${y}&type=${t}`;
  window.history.pushState({}, "State Changed", url);
};

// function which will refactor json data according to use
export const configureData = (goalsData, year, goalIndex) => {
  return goalsData[year].map((element) => {
    return {
      name: element.area_name,
      value: element.chartdata[goalIndex].value,
      id: element.area_code,
    };
  });
};
