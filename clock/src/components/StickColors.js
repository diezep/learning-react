const stickColors = (index) => {

  console.log(`Color palette: ${index}`);

  switch (index) {
    case 0:
      return {
        seconds: '#88FFF7',
        minutes: '#88FFF7',
        hours: '#7DEDFF',
        clockBackground: '#96BAFF',
        background: '#7C83FD',
      };

    case 1:
      return {
        seconds: '#53B8BB',
        minutes: '#53B8BB',
        hours: '#055052',
        background: '#B980F0',
        clockBackground: '#003638',
      };

    case 2:
      return {
        seconds: '#628395',
        minutes: '#628395',
        hours: '#FFA0A0',
        background: '#FFE3E3',
        clockBackground: '#262A53',
      };

    case 3:
      return {
        seconds: '#787A91',
        minutes: '#787A91',
        hours: '#141E61',
        background: '#EEE',
        clockBackground: '#0F044C',
      };

    case 4:
      return {
        seconds: '#B2B1B9',
        minutes: '#B2B1B9',
        hours: '#FFD523',
        background: '#2C2E43',
        clockBackground: '#595260',
      };

    case 5:
      return {
        seconds: '#FFC947',
        minutes: '#FFC947',
        hours: '#185ADB',
        background: '#EFEFEF',
        clockBackground: '#0A1931',
      };

    case 6:
      return {
        seconds: '#FFC107',
        minutes: '#FFC107',
        hours: '#7952B3',
        background: '#E1E8EB',
        clockBackground: '#343A40',
      };

    case 7:
      return {
        seconds: '#F5A962',
        minutes: '#F5A962',
        hours: '#3C8DAD',
        background: '#DDDDDD',
        clockBackground: '#125D98',
      };

    case 8:
      return {
        seconds: '#0A81AB',
        minutes: '#0A81AB',
        hours: '#0C4271',
        background: '#F9DFDC',
        clockBackground: '#000000',
      };

    case 9:
      return {
        seconds: '#185ADB',
        minutes: '#185ADB',
        hours: '#FFC947',
        background: '#FEDDBE',
        clockBackground: '#0A1931',
      };

    case 10:
      return {
        seconds: '#185ADB',
        minutes: '#185ADB',
        hours: '#F7FD04',
        background: '#FC5404',
        clockBackground: '#F9B208',
      };

    default:
      return {
        seconds: '#B2B1B9',
        minutes: '#B2B1B9',
        hours: '#595260',
        background: '#FFD523',
        clockBackground: '#2C2E43',
      };
  }
}

export default stickColors;