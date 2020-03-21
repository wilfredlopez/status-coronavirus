import { Plugins } from "@capacitor/core"
const { Storage } = Plugins

interface Options {
  key: string
  value: string
}
export default class MyStorage {
  currentId: number = 0

  // JSON "set" example
  async setObject(item: Options) {
    await Storage.set({
      key: item.key,
      value: JSON.stringify({
        id: this.currentId,
        value: item.value,
      }),
    })
    this.currentId++
  }

  // JSON "get" example
  async getObject(item: { key: string }) {
    const ret = await Storage.get(item)
    return ret.value ? JSON.parse(ret.value) : null
    //   const user = JSON.parse(ret.value);
  }

  async setItem(item: Options) {
    await Storage.set(item)
  }

  async getItem(key: string) {
    const { value } = await Storage.get({ key: key })
    // console.log("Got item: ", value);
    return value
  }

  async removeItem(key: string) {
    await Storage.remove({ key: key })
  }

  async keys() {
    const { keys } = await Storage.keys()

    // console.log("Got keys: ", keys);
    return keys
  }

  async clear() {
    await Storage.clear()
  }
}
