import {SORT_HIGH,SORT_LOW} from './types'
import {sortAction} from './sortAction'
describe('actions', () => {

const sortItems = [{name:'apple',price:25},{name:'banana',price:30}]

  it('should create actions which sorts items ',() => {

    const expectedAction = {
        type:SORT_HIGH,
        payload:sortItems
    }

    expect(sortAction(sortItems)).toEqual(expectedAction)
  })

})
