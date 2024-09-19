import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

// Swood imports
import { SwoodPerformance } from './pages/SwoodPerformance'
import { SwoodCompatibility } from './pages/SwoodCompatibility'
import { ScriptParameters } from './pages/ScriptParameters'
import { SwoodTab } from './pages/SwoodTab'
import { FileName } from './pages/FileName'

// Swood Report imports
import { SwoodReportQuickstart } from './pages/SwoodReportQuickstart'
import { SwoodLicensing } from './pages/SwoodLicensing'
import { ReportCompatibility } from './pages/ReportCompatibility'
import { SwoodDataDirectory } from './pages/SwoodDataDirectory'
import { Matrix } from './pages/Matrix'
import { SwoodProperties } from './pages/SwoodProperties'
import { MaterialExtendedProperties } from './pages/MaterialExtendedProperties'
import { CustomProperties } from './pages/CustomProperties'
import { ConcatenateProperties } from './pages/ConcatenateProperties'
import { Frames } from './pages/Frames'
import { CuttingPattern } from './pages/CuttingPattern'
import { NestedCuttingPattern } from './pages/NestedCuttingPattern'
import { Hardware } from './pages/Hardware'
import { HardwareLength } from './pages/HardwareLength'
import { HardwareType } from './pages/HardwareType'
import { BeamSaw } from './pages/BeamSaw'
import { SaveToPDF } from './pages/SaveToPDF'
import { Exclude } from './pages/Exclude'
import { MaterialType } from './pages/MaterialType'
import { SwoodReportReleaseNotes } from './pages/SwoodReportReleaseNotes'

// Swood Editor imports
import { SwoodEditorReleaseNotes } from './pages/SwoodEditorReleaseNotes'
import { CreatingDATBackups } from './pages/CreatingDATBackups'

// SwoodUtils imports
import { SwoodUtils } from './pages/SwoodUtils'
import { SwoodUtilsReleaseNotes } from './pages/SwoodUtilsReleaseNotes'
import ScrollToSection from './helper/ScrollToSection'
import { PageNotFound } from './pages/PageNotFound'

import { Layout } from './layout/Layout'

import { Sandbox } from './pages/Sandbox'

export const App = () => {
	return (
		<BrowserRouter basename="/SwoodDocs">
			<ScrollToSection />
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/index.html" element={<Home />} />
					<Route path="/SwoodCompatibility" element={<SwoodCompatibility />} />
					<Route path="/SwoodPerformance" element={<SwoodPerformance />} />
					<Route path="/ScriptParameters" element={<ScriptParameters />} />
					<Route path="/SwoodTab" element={<SwoodTab />} />
					<Route path="/FileName" element={<FileName />} />

					<Route path="/SwoodReportQuickstart" element={<SwoodReportQuickstart />} />
					<Route path="/html/SwoodReportQuickstart.html" element={<SwoodReportQuickstart />} />
					<Route path="/SwoodLicensing" element={<SwoodLicensing />} />
					<Route path="/ReportCompatibility" element={<ReportCompatibility />} />
					<Route path="/SwoodDataDirectory" element={<SwoodDataDirectory />} />
					<Route path="/Matrix" element={<Matrix />} />
					<Route path="/SwoodProperties" element={<SwoodProperties />} />
					<Route path="/MaterialExtendedProperties" element={<MaterialExtendedProperties />} />
					<Route path="/CustomProperties" element={<CustomProperties />} />
					<Route path="/ConcatenateProperties" element={<ConcatenateProperties />} />
					<Route path="/Frames" element={<Frames />} />
					<Route path="/CuttingPattern" element={<CuttingPattern />} />
					<Route path="/NestedCuttingPattern" element={<NestedCuttingPattern />} />
					<Route path="/Hardware" element={<Hardware />} />
					<Route path="/HardwareLength" element={<HardwareLength />} />
					<Route path="/HardwareType" element={<HardwareType />} />
					<Route path="/BeamSaw" element={<BeamSaw />} />
					<Route path="/SaveToPDF" element={<SaveToPDF />} />
					<Route path="/Exclude" element={<Exclude />} />
					<Route path="/MaterialType" element={<MaterialType />} />
					<Route path="/SwoodReportReleaseNotes" element={<SwoodReportReleaseNotes />} />

					<Route path="/SwoodEditorReleaseNotes" element={<SwoodEditorReleaseNotes />} />
					<Route path="/CreatingDATBackups" element={<CreatingDATBackups />} />

					<Route path="/SwoodUtils" element={<SwoodUtils />} />
					<Route path="/html/SwoodUtils.html" element={<SwoodUtils />} />
					<Route path="/SwoodUtilsReleaseNotes" element={<SwoodUtilsReleaseNotes />} />
				</Route>
				<Route path="/sandbox" element={<Sandbox />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
