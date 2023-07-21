import React from 'react'
import SearchSidebar from '../components/SearchSidebar'
import SearchedContents from '../components/SearchedContents'

export default function SearchPage() {
  return (
    <div className="px-8">
      <div className="flex gap-4">
        <div className="py-4 max-h-[665px] min-h-[250px] w-1/4 overflow-auto">
          <SearchSidebar />
        </div>
        <div className="w-3/4 max-h-[665px] min-h-[250px] overflow-auto">
          <SearchedContents />
        </div>
      </div>
    </div>
  )
}
