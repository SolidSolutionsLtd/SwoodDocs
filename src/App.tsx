import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Index } from './pages/Index'

// Swood
import { SwoodCompatibility } from './pages/SwoodCompatibility'
import { ScriptParameters } from './pages/ScriptParameters'
import { SwoodTab } from './pages/SwoodTab'
import { FileName } from './pages/FileName'

// Swood Report
import { SwoodReportQuickstart } from './pages/SwoodReportQuickstart'
import { SwoodLicensing } from './pages/SwoodLicensing'
import { ReportCompatibility } from './pages/ReportCompatibility'
import { SwoodDataDirectory } from './pages/SwoodDataDirectory'
import { Matrix } from './pages/Matrix'
import { SwoodProperties } from './pages/SwoodProperties'
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

// Swood Editor
import { SwoodEditorReleaseNotes } from './pages/SwoodEditorReleaseNotes'
import { CreatingDATBackups } from './pages/CreatingDATBackups'

// import { Sandbox } from './pages/Sandbox'
// SwoodUtils
import { SwoodUtils } from './pages/SwoodUtils'
import { SwoodUtilsReleaseNotes } from './pages/SwoodUtilsReleaseNotes'

function App() {
	return (
		<BrowserRouter basename="/SwoodDocs">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/index.html" element={<Index />} />
				<Route path="/SwoodCompatibility" element={<SwoodCompatibility />} />
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
				{/* <Route path="/Sandbox" element={<Sandbox />} /> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App