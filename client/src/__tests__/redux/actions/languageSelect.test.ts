import { changeLanguageAction } from "../../../redux/actions/languageSelect";
import { CHANGE_LANGUAGE } from "../../../redux/constants/languageSelect";

describe('changeLanguageAction', () => {
  test('should return action object', () => {
    expect(changeLanguageAction('en')).toEqual({
      type: CHANGE_LANGUAGE,
      payload: 'en'
    })
  })
});
