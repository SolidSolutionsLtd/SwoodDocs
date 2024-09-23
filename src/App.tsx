import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToSection from './helper/ScrollToSection'
import PageNotFound from './pages/PageNotFound'
import Layout from './layout/Layout'
// import Sandbox from './pages/Sandbox'
import Loading from './components/Loading'

const SwoodPerformance = lazy(() => import('./pages/SwoodPerformance'))
const SwoodCompatibility = lazy(() => import('./pages/SwoodCompatibility'))
const ScriptParameters = lazy(() => import('./pages/ScriptParameters'))
const SwoodTab = lazy(() => import('./pages/SwoodTab'))
const FileName = lazy(() => import('./pages/FileName'))

// Swood Report imports
const SwoodReportQuickStart = lazy(() => import('./pages/SwoodReportQuickStart'))
const SwoodLicensing = lazy(() => import('./pages/SwoodLicensing'))
const ReportCompatibility = lazy(() => import('./pages/ReportCompatibility'))
const SwoodDataDirectory = lazy(() => import('./pages/SwoodDataDirectory'))
const Matrix = lazy(() => import('./pages/Matrix'))
const SwoodProperties = lazy(() => import('./pages/SwoodProperties'))
const MaterialExtendedProperties = lazy(() => import('./pages/MaterialExtendedProperties'))
const ProjectName = lazy(() => import('./pages/ProjectName'))
const PanelsAndStocks = lazy(() => import('./pages/PanelsAndStocks'))
const CustomProperties = lazy(() => import('./pages/CustomProperties'))
const ConcatenateProperties = lazy(() => import('./pages/ConcatenateProperties'))
const Frames = lazy(() => import('./pages/Frames'))
const FrameType = lazy(() => import('./pages/FrameType'))
const CuttingPattern = lazy(() => import('./pages/CuttingPattern'))
const NestedCuttingPattern = lazy(() => import('./pages/NestedCuttingPattern'))
const Hardware = lazy(() => import('./pages/Hardware'))
const HardwareLength = lazy(() => import('./pages/HardwareLength'))
const HardwareType = lazy(() => import('./pages/HardwareType'))
const BeamSaw = lazy(() => import('./pages/BeamSaw'))
const SaveToPDF = lazy(() => import('./pages/SaveToPDF'))
const Exclude = lazy(() => import('./pages/Exclude'))
const MaterialType = lazy(() => import('./pages/MaterialType'))
const SwoodReportReleaseNotes = lazy(() => import('./pages/SwoodReportReleaseNotes'))

// Swood Editor imports
const SwoodEditorReleaseNotes = lazy(() => import('./pages/SwoodEditorReleaseNotes'))
const CreatingDATBackups = lazy(() => import('./pages/CreatingDATBackups'))

// SwoodUtils imports
const SwoodUtils = lazy(() => import('./pages/SwoodUtils'))
const SwoodUtilsReleaseNotes = lazy(() => import('./pages/SwoodUtilsReleaseNotes'))

export const App = () => {
	return (
		<BrowserRouter basename="/SwoodDocs">
			<ScrollToSection />
			{/* <Suspense fallback={<div>Loading...</div>}> */}
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/index.html" element={<Home />} />
					<Route path="/SwoodCompatibility" element={<SwoodCompatibility />} />
					<Route path="/SwoodPerformance" element={<SwoodPerformance />} />
					<Route path="/ScriptParameters" element={<ScriptParameters />} />
					<Route path="/SwoodTab" element={<SwoodTab />} />
					<Route path="/FileName" element={<FileName />} />

					<Route path="/SwoodReportQuickStart" element={<SwoodReportQuickStart />} />
					<Route path="/html/SwoodReportQuickstart.html" element={<SwoodReportQuickStart />} />
					<Route path="/SwoodLicensing" element={<SwoodLicensing />} />
					<Route path="/ReportCompatibility" element={<ReportCompatibility />} />
					<Route path="/SwoodDataDirectory" element={<SwoodDataDirectory />} />
					<Route path="/Matrix" element={<Matrix />} />
					<Route path="/SwoodProperties" element={<SwoodProperties />} />
					<Route path="/MaterialExtendedProperties" element={<MaterialExtendedProperties />} />
					<Route path="/ProjectName" element={<ProjectName />} />
					<Route path="/PanelsAndStocks" element={<PanelsAndStocks />} />
					<Route path="/CustomProperties" element={<CustomProperties />} />
					<Route path="/ConcatenateProperties" element={<ConcatenateProperties />} />
					<Route path="/Frames" element={<Frames />} />
					<Route path="/FrameType" element={<FrameType />} />
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

					<Route path="/Loading" element={<Loading />} />
				</Route>
				{/* <Route path="/sandbox" element={<Sandbox />} /> */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			{/* </Suspense> */}
		</BrowserRouter>
	)
}
