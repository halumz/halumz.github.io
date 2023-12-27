import jsPDF, { TextOptionsLight } from 'jspdf';
import { myself, configuration } from '../configs';
import ConfigModel from '../models/ConfigModel';

const fontFamily = 'Roboto';
const pageInitYOffset = 20;
const pageInitXOffset = 20;
const pageYOffset = 285;
let y = pageInitYOffset;

enum FontSizes {
  name = 14,
  title = 12,
  default = 10,
}

enum FontStyles {
  bold = 'bold',
  normal = 'normal',
}

enum Spaces {
  block = 3,
  portion = 1,
}

interface AddTextOptions {
  fontStyle?: FontStyles;
  fontSize?: FontSizes;
  url?: string;
  XAxis?: number;
  sameLine?: boolean;
  underline?: boolean;
}

const addNewPage = (cv: jsPDF) => {
  cv.addPage();
  y = pageInitYOffset;
};

const createTextOptions = (cv: jsPDF): TextOptionsLight => {
  const pageWidth = cv.internal.pageSize.getWidth();
  return {
    align: 'justify',
    maxWidth: pageWidth - 40,
  };
};

const addText = (
  cv: jsPDF,
  text: string | undefined,
  options?: AddTextOptions
) => {
  const {
    fontStyle = FontStyles.normal,
    fontSize = FontSizes.default,
    url = '',
    XAxis = pageInitXOffset,
    sameLine = false,
    underline = false,
  } = options || {};
  const textOptions = createTextOptions(cv);
  const dimension = cv.getTextDimensions(text || '', {
    ...textOptions,
    fontSize,
  });

  cv.setFontSize(fontSize);
  cv.setFont(fontFamily, fontStyle);
  if (url) {
    cv.textWithLink(text || '', XAxis, y, { url });
  } else {
    cv.text(text || '', XAxis, y, textOptions);
  }
  if (underline) {
    cv.line(XAxis, y + 1, XAxis + cv.getTextWidth(text || '') + 1, y + 1);
  }
  if (!sameLine) {
    y += Math.ceil(dimension.h) + 2;
  }
  if (y > pageYOffset) {
    addNewPage(cv);
  }
  return dimension;
};

const addEmptySpace = (cv: jsPDF, height = Spaces.block) => {
  y += height;
  if (y > pageYOffset) {
    addNewPage(cv);
  }
};

const createMySelf = (cv: jsPDF) => {
  addText(cv, myself.name, {
    fontSize: FontSizes.name,
    fontStyle: FontStyles.bold,
  });
  addText(cv, myself.profession);
  addText(cv, myself.address);
  addText(cv, myself.email, {
    url: `mailto:${myself.email}`,
    sameLine: true,
  });
  addText(cv, ` | ${myself.phone}`, {
    url: `tel:${myself.phone}`,
    XAxis: pageInitXOffset + cv.getTextWidth(myself.email),
  });
};

const setConfigParagraph = (
  cv: jsPDF,
  data: ConfigModel[],
  showArrow?: boolean
) => {
  data.forEach((item) => {
    if (!item.details) {
      return;
    }
    const text = showArrow ? `> ${item.details}` : item.details;
    addText(cv, text);
  });
};

const setConfigSkill = (cv: jsPDF, data: ConfigModel[]) => {
  data.forEach(({ title, skillSet }) => {
    const titleText = `${title}: `;
    addText(cv, titleText, {
      fontStyle: FontStyles.bold,
      sameLine: true,
    });
    addText(cv, skillSet?.join(', '), {
      XAxis: pageInitXOffset + cv.getTextWidth(titleText),
    });
  });
  addEmptySpace(cv);
};

const setConfigWorkExperience = (cv: jsPDF, data: ConfigModel[]) => {
  data.forEach(({ workRole, organization, details, period, link }) => {
    addEmptySpace(cv, Spaces.portion);
    addText(cv, `${workRole} | ${organization}`, {
      fontStyle: FontStyles.bold,
      url: link,
      underline: true,
    });
    addText(cv, period);
    addText(cv, details);
  });
};

const setConfigPortfolio = (cv: jsPDF, data: ConfigModel[]) => {
  data.forEach(({ title, organization, details, link }) => {
    const text = organization ? `${title} | ${organization}` : title;
    addEmptySpace(cv, Spaces.portion);
    addText(cv, text, {
      fontStyle: FontStyles.bold,
      url: link,
      underline: true,
    });
    addText(cv, details);
  });
};
const setConfigEducation = (cv: jsPDF, data: ConfigModel[]) => {
  data.forEach(({ title, period, result, organization }) => {
    addEmptySpace(cv, Spaces.portion);
    addText(cv, `${title} | ${organization}`, {
      fontStyle: FontStyles.bold,
    });
    addText(cv, `${period} - ${result}`);
  });
  addEmptySpace(cv);
};

const setConfigExternalLinks = (cv: jsPDF, data: ConfigModel[]) => {
  data.forEach(({ title, link }) => {
    const titleText = `${title}: `;
    addText(cv, titleText, {
      fontStyle: FontStyles.bold,
      sameLine: true,
    });
    addText(cv, link, {
      url: link,
      XAxis: pageInitXOffset + cv.getTextWidth(titleText),
      underline: true,
    });
  });
};

const createCV = (): jsPDF => {
  const cv = new jsPDF('p', 'mm', [297, 210]);
  cv.setFont(fontFamily);
  createMySelf(cv);

  configuration.forEach(
    ({ value, title, config, showArrow, addNewPageInPdf }) => {
      addEmptySpace(cv);
      addText(cv, title, {
        fontStyle: FontStyles.bold,
        fontSize: FontSizes.title,
        underline: true,
      });
      switch (value) {
        case 'personalInformation':
        case 'objectives':
        case 'awards':
          setConfigParagraph(cv, config, showArrow);
          break;
        case 'skills':
          setConfigSkill(cv, config);
          break;
        case 'workExperience':
          setConfigWorkExperience(cv, config);
          break;
        case 'portfolio':
          setConfigPortfolio(cv, config);
          break;
        case 'education':
          setConfigEducation(cv, config);
          break;
        case 'externalLinks':
          setConfigExternalLinks(cv, config);
          break;
        default:
          break;
      }

      if (addNewPageInPdf && y > pageInitYOffset) {
        addNewPage(cv);
      }
    }
  );
  return cv;
};

export default createCV;
