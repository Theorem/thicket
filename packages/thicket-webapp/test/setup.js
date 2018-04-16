import 'babel-polyfill'
import 'jest-localstorage-mock'

// BEWARE: does not persist
import IndexedBD from 'fake-indexeddb'
import IDBRequest from 'fake-indexeddb/lib/FDBRequest'
import IDBCursor from 'fake-indexeddb/lib/FDBCursor'
import IDBCursorWithValue from 'fake-indexeddb/lib/FDBCursorWithValue'
import IDBOpenDBRequest from 'fake-indexeddb/lib/FDBOpenDBRequest'

global.indexedDB = IndexedBD
global.IDBRequest = IDBRequest
global.IDBCursor = IDBCursor
global.IDBCursorWithValue = IDBCursorWithValue
global.IDBOpenDBRequest = IDBOpenDBRequest
